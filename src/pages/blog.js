import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { Row, Col, Space, Divider, Form, Input } from 'antd';
import styled from 'styled-components';
import { CalendarOutlined, SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import * as JsSearch from 'js-search';

import {
  Layout,
  SEO,
  Title,
  Paragraph,
  Text,
  Box,
  Button,
  MainCard,
  Icon,
  Image,
} from '~components';
import { truncate } from '~utils';
import { BdsPlug, Section } from '~components/layout';

export const query = graphql`
  query BlogQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            desc
            readTime
            tags
            imagePath
            date(formatString: "MMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    blogFiles: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "blog" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export const ArticleCard = styled(MainCard)(() => ({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
}));

const ArticleButton = styled(Button)({
  marginTop: 'auto',
});

const SearchIcon = styled(SearchOutlined)({
  opacity: 0.65,
});

const BlogImage = styled(Image)({
  marginTop: '-3rem',
  marginLeft: '-3rem',
  marginBottom: '1rem',
  width: 'calc(100% + 6rem)',
});

const TitleHolder = styled.div({
  position: 'relative',
  paddingLeft: '4.5rem',
});

const IconHolder = styled(Icon)({
  position: 'absolute',
  left: 0,
});

const Article = ({ title, desc, path, fluid, tags, date }) => (
  <Link to={path}>
    <ArticleCard>
      <BlogImage fluid={fluid} alt={title} />
      <Box margin="0 0 1.5rem 0">
        {/* Tags will be a single string for now, can be changed later
       into an array of tags */}
        <TitleHolder>
          <IconHolder type={`${tags}Tag`} width={48} />
          <Title
            level={5}
            transform="capitalize"
            marginBottom="0"
            style={{ display: 'inline-block' }}
          >
            {title}
          </Title>
          <Space size="large">
            <Text size="micro" type="secondary">
              <Space>
                <CalendarOutlined />
                <span>{moment(date).format('MMM D, YYYY')}</span>
              </Space>
            </Text>
          </Space>
        </TitleHolder>
      </Box>
      <Paragraph size="preNormal">{truncate(desc, 120)}</Paragraph>
      <ArticleButton type="primary">Read more</ArticleButton>
    </ArticleCard>
  </Link>
);

const FilterButtonHolder = styled(Button)({
  padding: '0.5rem',
  fontSize: '0.8rem',
});

const SecondaryButtonHolder = styled(FilterButtonHolder)(({ theme }) => ({
  border: `1px solid ${theme.colors.grayLevelTwo} !important`,

  '&:hover': {
    boxShadow: `0px 0px 5px 0px ${theme.colors.white}`,
    backgroundColor: `${theme.colors.white} !important`,
    color: `${theme.colors.primary} !important`,
  },
}));

const FilterButton = ({ isActive, name, onClick }) =>
  isActive ? (
    <FilterButtonHolder type="primary" onClick={onClick}>
      {name}
    </FilterButtonHolder>
  ) : (
    <SecondaryButtonHolder type="secondary" onClick={onClick}>
      {name}
    </SecondaryButtonHolder>
  );

const Blog = ({
  data: {
    allMdx: { edges },
    blogFiles,
  },
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState([]);
  const [searchResult, setSearchResult] = useState(edges);

  useEffect(() => {
    const filterAndSearchData = () => {
      const search = new JsSearch.Search(['node', 'id']);
      // Tags will be a single string for now, can be changed later
      // into an array of tags
      const filteredEdges =
        filters.length === 0
          ? edges
          : edges.filter(({ node: { frontmatter: { tags } } }) =>
              filters.includes(tags)
            );

      search.addIndex(['node', 'frontmatter', 'title']);
      search.addIndex(['node', 'frontmatter', 'desc']);

      search.addDocuments(filteredEdges);

      const searchedFilteredEdges = searchTerm
        ? search.search(searchTerm)
        : filteredEdges;

      setSearchResult(searchedFilteredEdges);
    };

    filterAndSearchData();
  }, [edges, filters, searchTerm]);

  const searchData = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const isActiveFilter = (filter) => filters.includes(filter);

  const handleFilterClick = (filterToChange) => {
    const includedInFilters = isActiveFilter(filterToChange);

    const updatedFilters = includedInFilters
      ? filters.filter((filter) => filter !== filterToChange)
      : [...filters, filterToChange];

    setFilters(updatedFilters);
  };

  return (
    <Layout>
      <SEO
        title="Blog"
        desc="Read about the modern Frontend world - I write guides, share insights, and explain how to skyrocket skills in no time."
        url="https://bigsondev.com/blog/"
      />
      <Title level={1} fontSize="2rem" align="center">
        Knowledge is power 📖
      </Title>
      <Paragraph align="center">
        To become a great Developer, <br />
        you have to learn.
      </Paragraph>
      <Divider />
      <Row justify="center">
        <Col xs={24} sm={16} lg={12}>
          <Form.Item name="searchTerm" style={{ marginBottom: '0.2rem' }}>
            <Input
              prefix={<SearchIcon />}
              placeholder="Search articles..."
              suffix={<Text size="small">{searchResult.length}</Text>}
              autoFocus
              value={searchTerm}
              onChange={searchData}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={16} lg={12}>
          <Paragraph>
            <Row justify="center" gutter={[4, 8]}>
              <Col>
                <FilterButton
                  isActive={isActiveFilter('js')}
                  name="JavaScript"
                  onClick={() => handleFilterClick('js')}
                />
              </Col>
              <Col>
                <FilterButton
                  isActive={isActiveFilter('react')}
                  name="React"
                  onClick={() => handleFilterClick('react')}
                />
              </Col>
              <Col>
                <FilterButton
                  isActive={isActiveFilter('tools')}
                  name="Tools"
                  onClick={() => handleFilterClick('tools')}
                />
              </Col>
              <Col>
                <FilterButton
                  isActive={isActiveFilter('uxui')}
                  name="UX/UI"
                  onClick={() => handleFilterClick('uxui')}
                />
              </Col>
              <Col>
                <FilterButton
                  isActive={isActiveFilter('improve')}
                  name="Improve"
                  onClick={() => handleFilterClick('improve')}
                />
              </Col>
            </Row>
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        {searchResult.map(
          ({
            node: {
              id,
              frontmatter,
              fields: { slug: path },
            },
          }) => {
            const {
              node: {
                childImageSharp: { fluid },
              },
            } = blogFiles.edges.find(
              ({ node: { base } }) => base === frontmatter.imagePath
            );

            return (
              <Col xs={24} md={12} key={id}>
                <Article path={path} fluid={fluid} {...frontmatter} />
              </Col>
            );
          }
        )}
      </Row>
      <Section>
        <BdsPlug />
      </Section>
    </Layout>
  );
};

export default Blog;
