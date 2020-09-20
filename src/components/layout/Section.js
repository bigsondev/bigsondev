/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Row, Col } from 'antd';

export const Section = ({ children, fullWidth = false }) => {
  return fullWidth ? (
    <section>{children}</section>
  ) : (
    <Row>
      <Col
        xs={{ offset: 1, span: 22 }}
        xl={{ offset: 2, span: 20 }}
        xxl={{ offset: 4, span: 16 }}
      >
        <section>{children}</section>
      </Col>
    </Row>
  );
};
