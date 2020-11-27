/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Row, Col } from 'antd';
import { theme } from '..';

const { colors } = theme;

export const Section = ({
  children,
  backgroundColor = colors.grayLevelOne,
}) => {
  return (
    <Row style={{ overflowX: 'hidden', backgroundColor }}>
      <Col
        xs={{ offset: 1, span: 22 }}
        xl={{ offset: 2, span: 20 }}
        xxl={{ offset: 3, span: 18 }}
      >
        <main>{children}</main>
      </Col>
    </Row>
  );
};
