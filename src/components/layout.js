/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Link } from 'gatsby';
import { Layout as AntdLayout, Menu } from 'antd';
import styled from 'styled-components';

import { Box } from '../components';

const Container = styled.div({
  maxWidth: 1200,
  margin: '0 auto',
});

const FlexWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Logo = styled.div({
  color: '#FFF',
});

const Content = styled(AntdLayout.Content)({
  background: '#FFF',
  paddingTop: 40,
});

export const Layout = ({ children }) => {
  return (
    <AntdLayout>
      <AntdLayout.Header>
        <Container>
          <FlexWrapper>
            <Link to="/">
              <Box pl={3}>
                <Logo>BIGSONDEV - LIBRARY</Logo>
              </Box>
            </Link>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">Profile</Menu.Item>
            </Menu>
          </FlexWrapper>
        </Container>
      </AntdLayout.Header>
      <Content>
        <Container>
          <main>{children}</main>
        </Container>
      </Content>
      {/* TODO implement Footer */}
    </AntdLayout>
  );
};
