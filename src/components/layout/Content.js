/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Row, Col } from 'antd';

import { ContentHolder } from './styled';

export const Content = ({ children }) => {
  return (
    <ContentHolder>
      <Row>
        <Col xs={{ offset: 1, span: 22 }} xl={{ offset: 2, span: 20 }}>
          <main>{children}</main>
        </Col>
      </Row>
    </ContentHolder>
  );
};
