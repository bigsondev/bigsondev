import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import { GlobalSpinner } from './GlobalSpinner';
import { SmallOnly, ExceptSmall } from '../MediaQueries';

const Holder = styled(Layout.Content)(({ theme }) => ({
  background: '#FAFAFA',
  paddingTop: theme.spacing.large,
}));

const SmallHolder = styled(Layout.Content)(({ theme }) => ({
  background: '#FAFAFA',
  paddingTop: theme.spacing.medium,
}));

const ContentHolder = ({ onContentShow, children }) => {
  useEffect(() => {
    onContentShow();
  }, [onContentShow]);

  return (
    <>
      <SmallOnly>
        <SmallHolder>{children}</SmallHolder>
      </SmallOnly>
      <ExceptSmall>
        <Holder>{children}</Holder>
      </ExceptSmall>
    </>
  );
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
