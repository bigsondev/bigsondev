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
import { ContentHolder } from './styled';
import { Header } from './Header';
import { Section } from './Section';
import { Footer } from './Footer';

const Holder = styled(AntdLayout)({});

export const Layout = ({ children, fixedContent = true }) => {
  return (
    <Holder>
      <GlobalStyles />
      <Header />
      <ContentHolder>
        {fixedContent ? <Section>{children}</Section> : children}
      </ContentHolder>
      <Footer />
    </Holder>
  );
};
