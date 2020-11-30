import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import Highlight from 'react-highlight/lib/optimized';
import styled from 'styled-components';

import { copyToClipboard } from '~utils';

import { Text, Paragraph } from '.';

const Holder = styled.div({
  position: 'relative',
  '& code': {
    backgroundColor: '#ecd9c26e',
    padding: 24,
    borderRadius: 6,
    marginTop: 0,
  },
});

const CopyButton = styled(Button)({
  position: 'absolute',
  borderRadius: 6,
  top: 16,
  right: 8,
});

const CodeTitle = styled(Paragraph)({
  position: 'absolute',
  bottom: -24,
  left: '50%',
  transform: 'translate(-50%)',
});

export const SyntaxHighlighter = ({
  language = 'javascript',
  showCopy = false,
  title = '',
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
      <Highlight languages={[language]} {...props}>
        {children}
      </Highlight>
      {title && (
        <CodeTitle type="secondary" fontStyle="italic" size="small">
          {title}
        </CodeTitle>
      )}
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
