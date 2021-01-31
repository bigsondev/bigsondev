import React from 'react';
import styled from 'styled-components';
import { UnControlled as CodeMirror } from 'react-codemirror2';

const Holder = styled.div({
  position: 'relative',
  pointerEvents: 'none',
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

const isMobile = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  if (window !== 'undefined') {
    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  return false;
};

export const SyntaxHighlighter = ({
  language = 'javascript',
  title = '',
  children,
  selection,
  ...props
}) => {
  const mobile = isMobile();
  // Add dummy line to trick Highlighter on mobile...
  const selectedLines = selection
    ? mobile
      ? [
          {
            anchor: { ch: 0, line: 0 },
            head: { line: 0 },
          },
          ...selection.ranges,
        ]
      : selection.ranges
    : [];
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
          readOnly: 'nocursor',
          lineNumbers: false,
        }}
        selection={{
          ranges: selectedLines,
        }}
        {...props}
      />
    </Holder>
  );
};
