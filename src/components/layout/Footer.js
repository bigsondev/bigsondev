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

import { LogoBase } from '~assets';

import { Link, Text } from '../Typography';
import { Paragraph, Icon } from '..';
import { FooterLogo } from './styled';

const Holder = styled.footer({
  padding: '5rem 1rem 0 1rem',
  position: 'relative',
  width: '100vw',
  background: '#F5F5F5',
});

const BottomHolder = styled.footer({
  padding: '0.5rem 0',
  position: 'relative',
  background: '#F5F5F5',
});

const FooterLinkHolder = styled(GatsbyLink)({
  '& > span': {
    color: '#000 !important',
  },
});

const HiddenLinkHolder = styled(GatsbyLink)({
  color: 'rgba(0, 0, 0, 0.45)',
  fontWeight: 200,
  fontSize: '0.875rem',

  '&:hover': {
    color: 'rgba(0, 0, 0, 0.45)',
  },
});

const IconHolder = styled(Link)({
  color: '#137099 !important',
  '& a': {
    color: '#137099 !important',
  },
  '& a:hover': {
    color: '#137099 !important',
  },
  '& a:active': {
    color: '#137099 !important',
  },
  '& a:visited': {
    color: '#137099 !important',
  },
});

const TermsLinksCol = styled(Col)({
  '@media (max-width: 576px)': {
    textAlign: 'left',
  },
  textAlign: 'right',
});

export const Footer = () => (
  <Holder>
    <Row>
      <Col
        xs={{ offset: 1, span: 22 }}
        xl={{ offset: 2, span: 20 }}
        xxl={{ offset: 3, span: 18 }}
      >
        <Row align="top" justify="space-between" gutter={[0, 32]}>
          <Col xs={24} sm={3}>
            <GatsbyLink to="/">
              <FooterLogo src={LogoBase} alt="BigsonDev Logo" />
            </GatsbyLink>
          </Col>
          <Col
            xs={24}
            sm={{ span: 6, offset: 3 }}
            style={{ marginTop: '0.9rem' }}
          >
            <Space size="large" direction="vertical">
              <FooterLinkHolder to="/mentorship/">
                <Text size="preNormal">Mentorship</Text>
              </FooterLinkHolder>
              <FooterLinkHolder to="/blog/">
                <Text size="preNormal">Blog</Text>
              </FooterLinkHolder>
              <FooterLinkHolder to="/pills/">
                <Text size="preNormal">Pills</Text>
              </FooterLinkHolder>
              <FooterLinkHolder to="/projects/">
                <Text size="preNormal">Projects</Text>
              </FooterLinkHolder>
              <FooterLinkHolder to="/reach-out/">
                <Text size="preNormal">Reach Out</Text>
              </FooterLinkHolder>
            </Space>
          </Col>
          <Col>
            <Space size="small">
              <Link href="https://www.codementor.io/@bigsondev">
                <IconHolder>
                  <Icon type="codementor" width="3.125rem" />
                </IconHolder>
              </Link>
              <Link href="https://mentorcruise.com/mentor/AdrianBigaj/">
                <IconHolder>
                  <Icon type="mentorCruise" width="3.125rem" />
                </IconHolder>
              </Link>
              <Link href="https://www.linkedin.com/in/adrian-bigaj-282277130/">
                <IconHolder>
                  <Icon type="linkedin" width="3.125rem" />
                </IconHolder>
              </Link>
              <Link href="https://twitter.com/BigsonDev">
                <IconHolder>
                  <Icon type="twitter" width="3.125rem" />
                </IconHolder>
              </Link>
            </Space>
          </Col>
        </Row>
        <Divider />
        <BottomHolder>
          <Row justify="space-between">
            <Col xs={24} sm={8}>
              <Paragraph size="micro" type="secondary" marginBottom="0">
                © 2020-2021 BigsonDev
              </Paragraph>
            </Col>
            <TermsLinksCol xs={24} sm={16}>
              <Space size="large">
                <HiddenLinkHolder to="/terms-of-service/">
                  Terms of Service
                </HiddenLinkHolder>
                <HiddenLinkHolder to="/privacy-policy/">
                  Privacy Policy
                </HiddenLinkHolder>
              </Space>
            </TermsLinksCol>
          </Row>
        </BottomHolder>
      </Col>
    </Row>
  </Holder>
);
