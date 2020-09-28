/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Row, Col, Space, Divider } from 'antd';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import { LogoFooter } from '~assets';

import { Link } from '../Typography';
import { Paragraph, Box, Icon } from '..';
import { Logo } from './styled';

const Holder = styled.footer({
  padding: '5rem 1rem 0 1rem',
  position: 'relative',
  width: '100vw',
  background: '#FAFAFA',
});

const BottomHolder = styled.footer({
  padding: '1rem 0',
  position: 'relative',
  background: '#FAFAFA',
});

const FooterLinkHolder = styled(GatsbyLink)({
  textDecoration: 'underline',
  color: '#000',
  fontSize: '1rem',

  '&:hover': {
    color: '#000',
  },
});

const HiddenLinkHolder = styled(GatsbyLink)({
  color: 'rgba(0, 0, 0, 0.45)',
  fontWeight: 200,
  fontSize: '0.9375rem',

  '&:hover': {
    color: 'rgba(0, 0, 0, 0.45)',
  },
});

const IconHolder = styled(Link)({
  color: '#40A9FF !important',
  '& a': {
    color: '#40A9FF !important',
  },
  '& a:hover': {
    color: '#40A9FF !important',
  },
  '& a:active': {
    color: '#40A9FF !important',
  },
  '& a:visited': {
    color: '#40A9FF !important',
  },
});

export const Footer = () => (
  <Holder>
    <Row>
      <Col
        xs={{ offset: 1, span: 22 }}
        xl={{ offset: 2, span: 20 }}
        xxl={{ offset: 4, span: 16 }}
      >
        <Row align="top" justify="space-between" gutter={[0, 32]}>
          <Col xs={24} sm={3}>
            <GatsbyLink to="/">
              <Logo src={LogoFooter} alt="BigsonDev Logo" />
            </GatsbyLink>
          </Col>
          <Col
            xs={24}
            sm={{ span: 6, offset: 3 }}
            style={{ marginTop: '0.9rem' }}
          >
            <Space size="large" direction="vertical">
              <Paragraph strong marginBottom="0">
                Menu
              </Paragraph>
              <FooterLinkHolder to="/blog/">Blog</FooterLinkHolder>
              <FooterLinkHolder to="/library/">Library</FooterLinkHolder>
              <FooterLinkHolder to="/mentorship/">Mentorship</FooterLinkHolder>
              <FooterLinkHolder to="/reach-out/">Reach Out</FooterLinkHolder>
            </Space>
          </Col>
          <Col>
            <Space size="small">
              <IconHolder>
                <Icon type="twitter" width="3.125rem" />
              </IconHolder>
              <IconHolder>
                <Icon type="linkedin" width="3.125rem" />
              </IconHolder>
              <IconHolder>
                <Icon type="facebook" width="3.125rem" />
              </IconHolder>
            </Space>
          </Col>
        </Row>
        <Divider />
        <BottomHolder>
          <Box display="flex" justify="space-between">
            <Paragraph size="micro" type="secondary" marginBottom="0">
              © 2020 BigsonDev
            </Paragraph>
            <HiddenLinkHolder to="/privacy-policy/">
              Privacy Policy
            </HiddenLinkHolder>
          </Box>
        </BottomHolder>
      </Col>
    </Row>
  </Holder>
);
