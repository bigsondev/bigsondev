/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import { Section } from './Section';
import { Footer } from './Footer';

export const Layout = ({ children, fixedContent = true }) => {
  return (
    <>
      {fixedContent ? <Section>{children}</Section> : children}
      <Footer />
    </>
  );
};
