import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

export const Logo = styled.img({
  width: 128,
  height: 'auto',
  marginLeft: -16,
});

export const ContentWrapper = styled(Layout.Content)({
  background: '#FFF',
  paddingTop: 32,
});

export const ContentHolder = ({ children }) => {
  useEffect(() => {
    console.log('Hi Content');
  }, []);

  return <ContentWrapper>{children}</ContentWrapper>;
};
