import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { Controlled } from 'react-codemirror2';
import styled from 'styled-components';

import { createIframeContent } from './utils';

const Holder = styled.div({
  backgroundColor: '#434B52',
  borderRadius: 6,
});

const CodeMirror = styled(Controlled)({
  '& .CodeMirror': {
    height: '35vh',
  },
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
  minHeight: '40vh',
  background: '#F5F5F5',
  resize: 'vertical',
});

export const CodeEditorRaw = ({
  tabs = ['html', 'css', 'js'],
  initialHtml = '',
  initialCss = '',
  initialJs = '',
}) => {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [timeoutId, setTimeoutId] = useState(undefined);
  const [iframeContent, setIframeContent] = useState(
    createIframeContent({ html: initialHtml, css: initialCss, js: initialJs })
  );

  const updateIframe = () => {
    const newIframeContent = createIframeContent({ html, css, js });

    if (iframeContent.localeCompare(newIframeContent) !== 0) {
      setIframeContent(newIframeContent);
    }
  };

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
  }, [html, css, js, timeoutId, updateIframe]);

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

  return (
    <>
      <Holder id="bigsondev-code-editor-raw">
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
                    theme: 'material-palenight',
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
              </TabPaneHolder>
            );
          })}
        </TabsHolder>
        <IframeResult
          frameBorder="0"
          border="0"
          cellSpacing="0"
          id="bigsondev-code-example-iframe"
          srcDoc={iframeContent}
        />
      </Holder>
    </>
  );
};
