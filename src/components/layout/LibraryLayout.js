/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Row, Col } from 'antd';

import { SEO } from '..';

const LibraryLayout = ({
  children,
  pageContext: {
    frontmatter: { title },
  },
}) => {
  return (
    <>
      <SEO title={`Library | ${title}`} />
      <Row justify="center">
        <Col xs={{ span: 22 }} md={{ span: 16 }} xl={{ span: 12 }}>
          <main>{children}</main>
        </Col>
      </Row>
    </>
  );
};

export default LibraryLayout;
