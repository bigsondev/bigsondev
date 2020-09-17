import React, { useState, useEffect } from 'react';
import { Tabs, Button, Result } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Controlled } from 'react-codemirror2';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import {
  Title,
  Paragraph,
  testsFailMessage,
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
    height: 225,
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
  minHeight: 225,
  background: '#FAFAFA',
  resize: 'vertical',
});

export const CodeEditor = ({
  result = 'Provide a result text',
  tabs = ['html', 'css', 'js'],
  tasks = [],
  tests = [],
}) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [timeoutId, setTimeoutId] = useState(undefined);
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
    } else {
      testsFailMessage();
      setChallengeCompleted(false);
    }

    setRunTimes(runTimes + 1);
    setExecutedTests(executedTests);
  };

  const handleRestartChallengeClick = () => {
    setChallengeCompleted(false);
    setExecutedTests([]);
  };

  const TABS_MAPPER = {
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

  return (
    <>
      <Title level={4} transform="capitalize">
        Expected Result
      </Title>
      <Paragraph size="preNormal">{result}</Paragraph>
      {challengeCompleted && (
        <Fade duration={1500}>
          <Result
            status="success"
            title="Challenge Completed!"
            subTitle="If you are happy with the solution, save it on GitHub repository to save the progress."
            extra={[
              <Button type="primary" key="save-on-github">
                Save on GitHub
              </Button>,
              <Button
                key="restart-challenge"
                onClick={handleRestartChallengeClick}
              >
                Restart Challenge
              </Button>,
            ]}
          />
        </Fade>
      )}
      <Holder>
        <Tasks tasks={tasks} executedTests={executedTests} />
        <TabsHolder type="card">
          {tabs.map((name, index) => {
            const { mode, tab, value, setter } = TABS_MAPPER[name];

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
                <RunTestsButton
                  type="primary"
                  icon={<PlayCircleOutlined />}
                  onClick={handleRunTestsClick}
                >
                  Run Tests
                </RunTestsButton>
              </TabPaneHolder>
            );
          })}
        </TabsHolder>
        <IframeResult
          frameBorder="0"
          border="0"
          cellSpacing="0"
          id="BigsonDev__ResultIframe"
          srcDoc={iframeContent}
        />
      </Holder>
    </>
  );
};
