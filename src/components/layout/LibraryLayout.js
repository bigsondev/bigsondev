/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import { BackButton } from '..';
import { Header } from './Header';
import { Content } from './styled';

const ContentContainer = styled.div({
  maxWidth: 800,
  margin: '0 auto',
});

const LibraryLayout = ({
  children,
  pageContext: {
    frontmatter: { title },
  },
}) => {
  return (
    <Layout>
      <Header />
      <Content>
        <ContentContainer>
          <BackButton to="/library" />
          <main>{children}</main>
        </ContentContainer>
      </Content>
      {/* TODO implement Footer */}
    </Layout>
  );
};

export default LibraryLayout;
