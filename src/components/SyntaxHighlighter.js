import React from 'react';
import styled from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2';

import { Paragraph } from '.';

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

const CodeTitle = styled(Paragraph)(({ theme }) => ({
  position: 'absolute',
  bottom: -24,
  left: '0.75rem',
  top: '0.25rem',
  color: `#d9d9d9 !important`,
  opacity: 0.85,
  fontWeight: theme.fontWeight.medium,
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
        title={title}
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

      {title && (
        <CodeTitle type="secondary" size="micro">
          {title}
        </CodeTitle>
      )}
    </Holder>
  );
};
