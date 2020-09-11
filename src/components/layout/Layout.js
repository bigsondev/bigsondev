/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Layout as AntdLayout } from 'antd';

import { Header } from './Header';
import { Container, Content } from './styled';

export const Layout = ({ children }) => {
  return (
    <AntdLayout>
      <Header />
      <Content>
        <Container>
          <main>{children}</main>
        </Container>
      </Content>
      {/* TODO implement Footer */}
    </AntdLayout>
  );
};
