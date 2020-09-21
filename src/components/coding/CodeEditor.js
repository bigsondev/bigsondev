import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Tabs, Button, Result, Row, Col, Space } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Controlled } from 'react-codemirror2';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import queryString from 'query-string';

import { Text, TutorialTooltip } from '~components';
import { copyToClipboard, setItem } from '~utils';

import {
  Title,
  Paragraph,
  Box,
  testsFailMessage,
  linkCopiedMessage,
  solutionLoadedMessage,
  jsInTheConsoleNotification,
} from '..';
import { Tasks } from './Tasks';
import { createIframeContent } from './utils';

const Holder = styled.div({
  backgroundColor: '#434B52',
  borderRadius: 12,
});

const CodeMirror = styled(Controlled)({
  '& .CodeMirror': {
    height: 200,
  },
});

const RunTestsButton = styled(Button)({
  position: 'absolute',
  top: '-22%',
  right: 16,
  borderRadius: 8,
});

const TabsHolder = styled(Tabs)({
  '& .ant-tabs-nav': {
    margin: 0,
    padding: 16,
    backgroundColor: '#434b52fa',
    position: 'initial',
  },
  '& .ant-tabs-tab': {
    backgroundColor: '#263238 !important',
    border: 'none !important',
    borderLeft: '3px solid #263238 !important',
    '&:hover': {
      opacity: 0.8,
    },
  },
  '& .ant-tabs-tab-active': {
    borderLeft: '3px solid #1890ff !important',
  },
  '& .ant-tabs-tab-btn': {
    color: '#FFF !important',
    fontWeight: 'initial !important',
  },
});

const TabPaneHolder = styled(Tabs.TabPane)({
  position: 'relative',
});

const IframeResult = styled.iframe({
  width: '100%',
  minHeight: 200,
  background: '#FAFAFA',
  resize: 'vertical',
});

export const CodeEditor = ({
  result = 'Provide a result text',
  tabs = ['html', 'css', 'js'],
  tasks = [],
  tests = [],
  help = [],
  next,
}) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [timeoutId, setTimeoutId] = useState(undefined);
  const [codeTutorialCounter, setCodeTutorialCounter] = useState(0);
  const [iframeContent, setIframeContent] = useState(
    createIframeContent({ html: '', css: '', js: '' })
  );
  const [runTimes, setRunTimes] = useState(0);
  const [executedTests, setExecutedTests] = useState([]);
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  const updateIframe = () => {
    const newIframeContent = createIframeContent({ html, css, js });

    if (iframeContent.localeCompare(newIframeContent) !== 0) {
      setIframeContent(newIframeContent);
    }
  };

  useEffect(() => {
    const { html: htmlQuery, css: cssQuery, js: jsQuery } = queryString.parse(
      window.location.search
    );

    if (htmlQuery || cssQuery || jsQuery) {
      setHtml(htmlQuery);
      setCss(cssQuery);
      setJs(jsQuery);
      solutionLoadedMessage();
    }
  }, []);

  useEffect(() => {
    const showJsNotification = tabs.includes('js');

    if (showJsNotification) {
      jsInTheConsoleNotification();
    }
  }, []);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(undefined);
    }

    const newTimeoutId = setTimeout(() => {
      updateIframe();
    }, 300);

    setTimeoutId(newTimeoutId);

    return () => clearTimeout(timeoutId);
  }, [html, css, js]);

  const handleRunTestsClick = () => {
    const executedTests = tests.map((test) => {
      const testResult = test();

      return testResult;
    });

    const allTestsPassed = executedTests.every((test) => test);

    if (allTestsPassed) {
      setChallengeCompleted(true);
      window.scrollTo(0, 0);
    } else {
      testsFailMessage();
      setChallengeCompleted(false);
    }

    setRunTimes(runTimes + 1);
    setExecutedTests(executedTests);
  };

  const handleCopyLinkClick = () => {
    const link = `${window.location.href}?html=${html}&css=${css}&js=${js}`;

    linkCopiedMessage();
    copyToClipboard(link);
  };

  const handleOkClick = () => {
    setCodeTutorialCounter(codeTutorialCounter + 1);
  };

  const TAB_MAPPER = {
    html: {
      mode: 'htmlembedded',
      tab: 'HTML',
      value: html,
      setter: setHtml,
    },
    css: {
      mode: 'css',
      tab: 'CSS',
      value: css,
      setter: setCss,
    },
    js: {
      mode: 'javascript',
      tab: 'JS',
      value: js,
      setter: setJs,
    },
  };

  const hasNextChallenge = Boolean(next);

  return (
    <>
      <Title level={4} transform="capitalize">
        Expected Result
      </Title>
      <TutorialTooltip
        title="Hi, please read the instructions before diving into the code"
        type="codeTutorial"
        onClick={handleOkClick}
        visible={codeTutorialCounter === 0}
      >
        <Paragraph size="preNormal">{result}</Paragraph>
      </TutorialTooltip>
      {challengeCompleted && (
        <Fade duration={1500}>
          <Result
            status="success"
            title="Challenge Completed!"
            subTitle={
              hasNextChallenge
                ? 'If you are happy with the solution, copy the link and share it with someone, or just continue to the next challenge.'
                : `You've completed all challenges on this path.`
            }
            extra={
              hasNextChallenge
                ? [
                    <Button
                      type="primary"
                      key="copy-link"
                      onClick={handleCopyLinkClick}
                    >
                      Copy Link
                    </Button>,
                    <Link to={`/library/${next}`}>
                      <Button key="next-challenge">Next Challenge</Button>
                    </Link>,
                  ]
                : [
                    <Button
                      type="primary"
                      key="copy-link"
                      onClick={handleCopyLinkClick}
                    >
                      Copy Link
                    </Button>,
                    <Link to="/library">
                      <Button key="back-to-library">Back to Library</Button>
                    </Link>,
                  ]
            }
          />
        </Fade>
      )}
      <Holder>
        <Row justify="space-between" align="center">
          <Col>
            <TutorialTooltip
              title="You can hover over these dots to check which tests are
              running against your code, they will turn green or red
              depending if your solution is correct"
              type="codeTutorial"
              onClick={handleOkClick}
              visible={codeTutorialCounter === 1}
            >
              <Tasks tasks={tasks} executedTests={executedTests} />
            </TutorialTooltip>
          </Col>
          <Col>
            <TutorialTooltip
              title="If the code challenge is a bit too hard for you, get some
              help by going through resources and learning about the
              problem"
              type="codeTutorial"
              onClick={handleOkClick}
              visible={codeTutorialCounter === 2}
            >
              <Box pt={2} mr={2}>
                <Text
                  strong
                  color="#FFF"
                  display="block"
                  size="small"
                  align="right"
                >
                  Resources
                </Text>
                <Space>
                  {help.map((help, index) => (
                    <span key={index}>{help}</span>
                  ))}
                </Space>
              </Box>
            </TutorialTooltip>
          </Col>
        </Row>
        <TutorialTooltip
          title="Write some actual code, below the tests you can have maximum 3
          tabs (HTML, CSS, JS), make sure you are writing code in a proper
          one"
          type="codeTutorial"
          onClick={handleOkClick}
          visible={codeTutorialCounter === 3}
        >
          <TabsHolder type="card">
            {tabs.map((name, index) => {
              const { mode, tab, value, setter } = TAB_MAPPER[name];

              return (
                <TabPaneHolder tab={tab} key={index}>
                  <CodeMirror
                    value={value}
                    options={{
                      mode,
                      lineNumbers: true,
                      lineWrapping: true,
                      theme: 'material',
                      tabSize: 2,
                      showCursorWhenSelecting: true,
                      autofocus: true,
                      matchBrackets: true,
                      autoCloseBrackets: true,
                      matchTags: true,
                      autoCloseTags: true,
                      showHint: true,
                      extraKeys: { 'Ctrl-Space': 'autocomplete' },
                    }}
                    onBeforeChange={(editor, data, code) => setter(code)}
                  />
                  <TutorialTooltip
                    title="When you are ready, click this button and validate
                    your solution"
                    type="codeTutorial"
                    onClick={() => {
                      handleOkClick();
                      setItem('codeTutorial', true);
                    }}
                    visible={codeTutorialCounter === 5}
                  >
                    <RunTestsButton
                      type="primary"
                      icon={<PlayCircleOutlined />}
                      onClick={handleRunTestsClick}
                    >
                      Run Tests
                    </RunTestsButton>
                  </TutorialTooltip>
                </TabPaneHolder>
              );
            })}
          </TabsHolder>
        </TutorialTooltip>
        <TutorialTooltip
          title="Watch the result dynamically changing as you write code. Yes, in
          real-time"
          type="codeTutorial"
          onClick={handleOkClick}
          visible={codeTutorialCounter === 4}
        >
          <IframeResult
            frameBorder="0"
            border="0"
            cellSpacing="0"
            id="BigsonDev__ResultIframe"
            srcDoc={iframeContent}
          />
        </TutorialTooltip>
      </Holder>
    </>
  );
};
