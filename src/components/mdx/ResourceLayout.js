/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Link } from 'gatsby';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

import { Breadcrumb, Box } from '..';

const Container = styled.div({
  maxWidth: 1200,
  margin: '0 auto',
});

const ContentContainer = styled.div({
  maxWidth: 800,
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

const Content = styled(Layout.Content)({
  background: '#FFF',
  paddingTop: 40,
});

const ResourceLayout = ({
  children,
  pageContext: {
    frontmatter: { title },
  },
}) => {
  return (
    <Layout>
      <Layout.Header>
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
      </Layout.Header>
      <Content>
        <ContentContainer>
          <Breadcrumb title={title} />
          <main>{children}</main>
        </ContentContainer>
      </Content>
      {/* TODO implement Footer */}
    </Layout>
  );
};

export default ResourceLayout;
