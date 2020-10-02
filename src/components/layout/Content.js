import React, { useState, useEffect } from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import styled from 'styled-components';
import { Layout } from 'antd';

import { GlobalSpinner } from './GlobalSpinner';

const Holder = styled(Layout.Content)({
  background: '#FFF',
  paddingTop: 32,
});

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
      <PageTransition>
        <ContentHolder onContentShow={handleContentShow}>
          {children}
        </ContentHolder>
      </PageTransition>
    </>
  );
};
