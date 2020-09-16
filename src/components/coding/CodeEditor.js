import React, { useState, useEffect } from 'react';
import { Tabs, Space, Button } from 'antd';
import {
  PlayCircleOutlined,
  BorderOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined,
} from '@ant-design/icons';
import { Controlled as CodeMirror } from 'react-codemirror2';
import styled from 'styled-components';

import { Title, Paragraph } from '..';

const Holder = styled.div({
  backgroundColor: '#434B52',
  borderRadius: 12,
});

const TasksHolder = styled.div({
  padding: 16,
});

const RunTestsButton = styled(Button)({
  position: 'absolute',
  top: '-17%',
  right: 16,
  borderRadius: 8,
});

const TestItemHolder = styled.div({});

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
  background: '#FAFAFA',
  resize: 'vertical',
});

const createIframeContent = ({ html, css, js }) => `
<html>
  <head>
    <style>
      body {
        font-size: 1.125rem;
      }
      ${css}
    </style>
  </head>
  <body>
      ${html}
  <script>
    ${js}
  </script>
  </body>
</html>
`;

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

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(undefined);
    }

    const newTimeoutId = setTimeout(() => {
      const newIframeContent = createIframeContent({ html, css, js });

      if (iframeContent.localeCompare(newIframeContent) !== 0) {
        setIframeContent(newIframeContent);
      }
    }, 300);

    setTimeoutId(newTimeoutId);

    return () => clearTimeout(timeoutId);
  }, [html, css, js]);

  const handleRunTestsClick = () => {
    const executedTests = tests.map((test) => {
      const testResult = test();

      return testResult;
    });

    setRunTimes(runTimes + 1);
    setExecutedTests(executedTests);
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
      <Holder>
        <TasksHolder>
          <Space direction="vertical" size="middle">
            {tasks.map((test, index) => (
              <TestItemHolder key={index}>
                <Space size="middle">
                  {executedTests.length > 0 ? (
                    executedTests[index] ? (
                      <CheckSquareOutlined
                        style={{ color: '#52c41a', fontSize: 16 }}
                      />
                    ) : (
                      <CloseSquareOutlined
                        style={{ color: '#f5222d', fontSize: 16 }}
                      />
                    )
                  ) : (
                    <BorderOutlined style={{ color: '#FFF', fontSize: 16 }} />
                  )}
                  {test}
                </Space>
              </TestItemHolder>
            ))}
          </Space>
        </TasksHolder>
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
                  onBeforeChange={(editor, data, value) => setter(value)}
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
