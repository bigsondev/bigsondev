import React from 'react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import { Row, Col, Space, Divider } from 'antd';
import styled from 'styled-components';

import {
  Layout,
  SEO,
  Title,
  Paragraph,
  Text,
  Box,
  SlackBanner,
  Button,
  MainCard,
  Image,
} from '~components';
import { truncate } from '~utils';
import {
  PillOne,
  PillTwo,
  PillThree,
  PillFour,
  PillFive,
  PillSix,
  PillSeven,
  PillEight,
  PillNine,
  PillTen,
  PillEleven,
} from '~assets';

const PillCard = styled(MainCard)({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
});

const PillButton = styled(Button)({
  marginTop: 'auto',
  width: '100%',
});

const TAG_COLOR_MAPPER = {
  html: '#ffc069',
  css: '#91d5ff',
  js: '#ffec3d',
  react: '#61DAFB',
  express: '#43853D',
  'socket.io': '#000',
};

export const query = graphql`
  query PillsQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/pills/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            desc
            tags
            type
            image
            date(formatString: "MMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const PILLS_MAPPER = {
  pillOne: PillOne,
  pillTwo: PillTwo,
  pillThree: PillThree,
  pillFour: PillFour,
  pillFive: PillFive,
  pillSix: PillSix,
  pillSeven: PillSeven,
  pillEight: PillEight,
  pillNine: PillNine,
  pillTen: PillTen,
  pillEleven: PillEleven,
};

const Pill = ({ title, desc, path, tags, image }) => (
  <GatsbyLink to={path}>
    <PillCard>
      <Row gutter={[0, 8]}>
        <Col span={24}>
          <Space size="middle">
            {tags.split(',').map((tag) => (
              <Text
                key={tag}
                transform="uppercase"
                strong
                size="small"
                color={TAG_COLOR_MAPPER[tag.trim()]}
              >
                {tag}
              </Text>
            ))}
          </Space>
        </Col>
        <Col span={24}>
          <Title level={4} transform="capitalize">
            {title}
          </Title>
        </Col>
        <Col span={24}>
          <Image src={PILLS_MAPPER[image]} alt={desc} />
        </Col>
        <Col span={24}>
          <Paragraph type="secondary" size="preNormal">
            {truncate(desc, 180)}
          </Paragraph>
        </Col>
      </Row>
      <PillButton type="primary" style={{ marginBottom: '0.5rem' }}>
        Eat pill
      </PillButton>
      <GatsbyLink to={`${path}#bigsondev-code-editor-raw`}>
        <PillButton type="secondary" style={{ width: '100%' }}>
          Open interactive example
        </PillButton>
      </GatsbyLink>
    </PillCard>
  </GatsbyLink>
);

const Pills = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Pills | Knowledge Pills, Code Examples, Useful Tips & Tricks You Can Use On Daily Basis" />
      <Title level={2} align="center">
        We all need pills 💊
      </Title>
      <Paragraph align="center">
        To become a great Developer, <br />
        you have to eat my knowledge pills.
      </Paragraph>
      <Divider />
      <Box mb={3}>
        <Title level={3} transform="capitalize" align="center">
          Pills
        </Title>
      </Box>
      <Row gutter={[24, 24]} justify="center">
        {edges.map(({ node: { id, frontmatter, fields: { slug: path } } }) => (
          <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 8 }} key={id}>
            <Pill path={path} {...frontmatter} />
          </Col>
        ))}
      </Row>
      <Box margin="5rem 0">
        <SlackBanner />
      </Box>
    </Layout>
  );
};

export default Pills;
