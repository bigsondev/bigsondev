import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import { GlobalSpinner } from './GlobalSpinner';

const Holder = styled(Layout.Content)(({ theme }) => ({
  background: '#FAFAFA',
  paddingTop: theme.spacing.large,
}));

const ContentHolder = ({ onContentShow, children }) => {
  useEffect(() => {
    onContentShow();
  }, []);

  return <Holder>{children}</Holder>;
};

export const Content = ({ children }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  const handleContentShow = () => {
    setShowSpinner(false);
  };

  return (
    <>
      {showSpinner && <GlobalSpinner />}
      <ContentHolder onContentShow={handleContentShow}>
        {children}
      </ContentHolder>
    </>
  );
};
