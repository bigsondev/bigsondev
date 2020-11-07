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

import { Link, Text } from '../Typography';
import { Paragraph, Icon } from '..';
import { Logo } from './styled';

const Holder = styled.footer({
  padding: '5rem 1rem 0 1rem',
  position: 'relative',
  width: '100vw',
  background: '#FAFAFA',
});

const BottomHolder = styled.footer({
  padding: '0.5rem 0',
  position: 'relative',
  background: '#FAFAFA',
});

const FooterLinkHolder = styled(GatsbyLink)({
  color: 'rgba(80,80,80,0.7)',

  '& > span:hover': {
    transition: 'color 0.1s ease-in',
    color: '#000',
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
              <FooterLinkHolder to="/start-here/">
                <Text strong>Start Here</Text>
              </FooterLinkHolder>
              <FooterLinkHolder to="/blog/">
                <Text strong>Blog</Text>
              </FooterLinkHolder>
              <FooterLinkHolder to="/library/">
                <Text strong>Library</Text>
              </FooterLinkHolder>
              <FooterLinkHolder to="/mentorship/">
                <Text strong>Mentorship</Text>
              </FooterLinkHolder>
              <FooterLinkHolder to="/reach-out/">
                <Text strong>Reach Out</Text>
              </FooterLinkHolder>
            </Space>
          </Col>
          <Col>
            <Space size="small">
              <Link href="https://github.com/bigsondev">
                <IconHolder>
                  <Icon type="github" width="3.125rem" />
                </IconHolder>
              </Link>
              <Link href="https://twitter.com/BigsonDev">
                <IconHolder>
                  <Icon type="twitter" width="3.125rem" />
                </IconHolder>
              </Link>
              <Link href="https://www.facebook.com/BigsonDev-109789784229011">
                <IconHolder>
                  <Icon type="facebook" width="3.125rem" />
                </IconHolder>
              </Link>
              <Link href="https://www.instagram.com/bigsondev/">
                <IconHolder>
                  <Icon type="instagram" width="3.125rem" />
                </IconHolder>
              </Link>
              <Link href="https://www.linkedin.com/in/adrian-bigaj-282277130/">
                <IconHolder>
                  <Icon type="linkedin" width="3.125rem" />
                </IconHolder>
              </Link>
              <Link href="https://dribbble.com/milenadev">
                <IconHolder>
                  <Icon type="dribble" width="3.125rem" />
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
                © 2020 BigsonDev
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
