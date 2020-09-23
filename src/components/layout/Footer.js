/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { LogoFooter } from '~assets';

import { Paragraph } from '..';
import { Logo } from './styled';

const Holder = styled.footer({
  padding: '9em 1em',
  position: 'relative',
  width: '100vw',
  background: '#FAFAFA',
});

const FooterLinkHolder = styled(Link)({
  textDecoration: 'underline',
  color: '#000',
  fontSize: '1.27rem',
});

export const Footer = () => (
  <Holder>
    <Row>
      <Col
        xs={{ offset: 1, span: 22 }}
        xl={{ offset: 2, span: 20 }}
        xxl={{ offset: 4, span: 16 }}
      >
        <Row align="top" gutter={[0, 16]}>
          <Col xs={24} sm={3}>
            <Link to="/">
              <Logo src={LogoFooter} alt="BigsonDev Logo" />
            </Link>
            <Paragraph size="micro" type="secondary">
              © 2020 BigsonDev
            </Paragraph>
          </Col>
          <Col
            xs={24}
            sm={{ span: 10, offset: 4 }}
            style={{ marginTop: '0.75rem' }}
          >
            <Space size="large" direction="vertical">
              <Paragraph strong marginBottom="0">
                Menu
              </Paragraph>
              <FooterLinkHolder to="/blog">Blog</FooterLinkHolder>
              <FooterLinkHolder to="/library">Library</FooterLinkHolder>
              <FooterLinkHolder to="/mentorship">Mentorship</FooterLinkHolder>
              <FooterLinkHolder to="/reach-out">Reach Out</FooterLinkHolder>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  </Holder>
);
