import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import Highlight from 'react-highlight';
import styled from 'styled-components';

const copyToClipboard = (textToCopy) => {
  const textArea = document.createElement('textarea');
  textArea.setAttribute('style', 'position: absolute; left: -2000px');
  textArea.textContent = textToCopy;
  document.body.append(textArea);
  textArea.select();
  document.execCommand('copy');
  const parent = textArea.parentElement;
  parent && parent.removeChild(textArea);
};

const Holder = styled.div({
  position: 'relative',
  '& code': {
    backgroundColor: '#ecd9c26e',
    padding: 24,
    borderRadius: 8,
  },
});

const CopyButton = styled(Button)({
  position: 'absolute',
  borderRadius: 8,
  top: 8,
  right: 8,
});

export const SyntaxHighlighter = ({
  language = 'javascript',
  showCopy = false,
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const handleCopyClick = () => {
    copyToClipboard(children);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  return (
    <Holder>
      <Highlight className={language} {...props}>
        {children}
      </Highlight>
      {showCopy && (
        <Popover trigger="click" content="Copied!" visible={visible}>
          <CopyButton onClick={handleCopyClick}>Copy</CopyButton>
        </Popover>
      )}
    </Holder>
  );
};
