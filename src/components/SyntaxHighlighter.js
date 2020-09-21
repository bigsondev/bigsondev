import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import Highlight from 'react-highlight';
import styled from 'styled-components';

import { copyToClipboard } from '~utils';

import { Text } from '.';

const Holder = styled.div({
  position: 'relative',
  '& code': {
    backgroundColor: '#ecd9c26e',
    padding: 24,
    borderRadius: 8,
    marginTop: 8,
  },
});

const CopyButton = styled(Button)({
  position: 'absolute',
  borderRadius: 8,
  top: 16,
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
          <CopyButton onClick={handleCopyClick}>
            <Text type="secondary" size="micro" strong>
              Copy
            </Text>
          </CopyButton>
        </Popover>
      )}
    </Holder>
  );
};
