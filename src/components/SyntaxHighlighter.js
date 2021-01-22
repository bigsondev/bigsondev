import React from 'react';
import styled from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2';

const Holder = styled.div({
  position: 'relative',
  marginBottom: '1rem',
  '& code': {
    backgroundColor: '#ecd9c26e',
    padding: 24,
    borderRadius: 6,
    marginTop: 0,
  },
});

const CodeMirrorHolder = styled(CodeMirror)(({ theme, title }) => ({
  '& .CodeMirror': {
    borderRadius: theme.borders.radius,
    padding: title ? '1.5rem 0.5rem 0.5rem 0.5rem' : '0.5rem',
    height: '100%',
  },
  '& .CodeMirror-cursor': { display: 'none !important' },
}));

export const SyntaxHighlighter = ({
  language = 'javascript',
  title = '',
  children,
  ...props
}) => {
  return (
    <Holder>
      <CodeMirrorHolder
        value={children}
        options={{
          mode: language,
          lineWrapping: true,
          theme: 'material-palenight',
          tabSize: 2,
          showCursorWhenSelecting: false,
          autofocus: false,
          matchBrackets: false,
          autoCloseBrackets: false,
          matchTags: false,
          autoCloseTags: false,
          showHint: false,
          readOnly: true,
        }}
      />
    </Holder>
  );
};
