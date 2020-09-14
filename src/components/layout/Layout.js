/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Layout as AntdLayout } from 'antd';
import styled from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import { Header } from './Header';
import { Content } from './Content';

const Holder = styled(AntdLayout)({});

export const Layout = ({ children }) => {
  return (
    <Holder>
      <GlobalStyles />
      <Header />
      <Content>{children}</Content>
      {/* TODO implement Footer */}
    </Holder>
  );
};
