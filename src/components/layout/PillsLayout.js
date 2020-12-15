/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Row, Col, Space } from 'antd';
import styled from 'styled-components';

import {
  shareOnReddit,
  shareOnTwitter,
  shareOnLinkedin,
  shareOnFacebook,
} from '~utils';

import { SEO, SlackBanner, Box, PromoBanner, Link, Icon } from '..';
import { Footer } from './Footer';

const IconHolder = styled(Link)({
  color: '#FAFAFA !important',
  '& a': {
    color: '#FAFAFA !important',
  },
  '& a:hover': {
    color: '#FAFAFA !important',
  },
  '& a:active': {
    color: '#FAFAFA !important',
  },
  '& a:visited': {
    color: '#FAFAFA !important',
  },
});

const PillsLayout = ({
  children,
  pageContext: {
    frontmatter: { desc },
  },
}) => {
  return (
    <>
      <SEO title={`Pills | ${desc}`} />
      <Row justify="center" gutter={[0, 40]}>
        <Col xs={{ span: 22 }} md={{ span: 16 }} xl={{ span: 12 }}>
          <main>{children}</main>
        </Col>
        <Col xs={22} xl={20} xxl={18}>
          <SlackBanner id="bigsondev-slack" />
        </Col>
        <Col xs={22} xl={20} xxl={18}>
          <Box margin="0 0 5rem 0">
            <PromoBanner
              title="spread the word"
              desc="Do you like this pill? Share it with someone!"
              id="bigsondev-spread-the-word"
              content={
                <Space size="small">
                  <IconHolder href={shareOnReddit()}>
                    <Icon type="reddit" width="3.125rem" />
                  </IconHolder>
                  <IconHolder
                    href={shareOnTwitter(
                      `bigsondev.com - Knowledge Pill - ${desc}`
                    )}
                  >
                    <Icon type="twitter" width="3.125rem" />
                  </IconHolder>
                  <IconHolder href={shareOnFacebook()}>
                    <Icon type="facebook" width="3.125rem" />
                  </IconHolder>
                  <IconHolder href={shareOnLinkedin()}>
                    <Icon type="linkedin" width="3.125rem" />
                  </IconHolder>
                </Space>
              }
            />
          </Box>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default PillsLayout;
