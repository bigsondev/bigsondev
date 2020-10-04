import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import Fade from 'react-reveal/Fade';

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
      <Fade duration={300}>
        <ContentHolder onContentShow={handleContentShow}>
          {children}
        </ContentHolder>
      </Fade>
    </>
  );
};
