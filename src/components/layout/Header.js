import React from 'react';
import { Link } from 'gatsby';
import { Layout, Menu } from 'antd';

import { Box } from '..';
import { Container, Logo } from './styled';

export const Header = () => (
  <Layout.Header>
    <Container>
      <Box display="flex" align="center" justify="space-between">
        <Link to="/">
          <Box pl={3}>
            <Logo>BIGSONDEV - LIBRARY</Logo>
          </Box>
        </Link>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/library">Library</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/blog">Blog</Link>
          </Menu.Item>
        </Menu>
      </Box>
    </Container>
  </Layout.Header>
);
