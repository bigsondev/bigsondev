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
  Icon,
  Image,
} from '~components';
import { truncate } from '~utils';
import { PillOne, PillTwo, PillThree, PillFour } from '~assets';

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
  ['socket.io']: '#000',
};

export const query = graphql`
  query PillsQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/mdx/pills/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            desc
            path
            interactivePath
            tags
            type
            image
            date(formatString: "MMM D")
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
};

const Pill = ({ desc, path, interactivePath, tags, image, type }) => (
  <GatsbyLink to={path}>
    <PillCard>
      <Row gutter={[0, 8]}>
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <Col>
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
            <Col>
              <Icon
                type={type === 'girl' ? 'girlPill' : 'boyPill'}
                width={24}
              />
            </Col>
          </Row>
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
      {Boolean(interactivePath) && (
        <GatsbyLink to={interactivePath}>
          <PillButton type="secondary" style={{ width: '100%' }}>
            Open interactive example
          </PillButton>
        </GatsbyLink>
      )}
    </PillCard>
  </GatsbyLink>
);

const Pills = ({
  data: {
    allMdx: { edges },
  },
}) => {
  console.log(edges);
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
        {edges.map(({ node: { frontmatter } }) => (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            xl={{ span: 8 }}
            key={frontmatter.desc}
          >
            <Pill {...frontmatter} />
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
