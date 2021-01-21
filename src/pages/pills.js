import React, { useState, useEffect } from 'react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import { Row, Col, Divider, Rate, Form, Input, Dropdown, Menu } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import * as JsSearch from 'js-search';

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
  theme,
} from '~components';
import { truncate } from '~utils';

const PillCard = styled(MainCard)({
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
});

const RateHolder = styled(Rate)({
  '& .ant-rate-star-full path': {
    fill: '#F9B060',
  },
  '& .ant-rate-star-zero path': {
    fill: '#f0f0f0',
  },
});

const SearchIcon = styled(SearchOutlined)({
  opacity: 0.65,
});

const PillButton = styled(Button)({
  marginTop: 'auto',
});

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

const DropdownHolder = styled(Dropdown)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:hover': {
    color: `${theme.colors.primary}`,
  },
}));

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
            difficulty
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

const { opacity } = theme;

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

const Pill = ({ title, desc, path, tags, difficulty }) => (
  <GatsbyLink to={path}>
    <PillCard>
      <Box margin="0 0 1.5rem 0">
        <Row align="top" justify="start" gutter={32}>
          <Col xs={6} lg={4}>
            {/* Tags will be a single string for now, can be changed later
       into an array of tags */}
            <Icon type={`${tags}Tag`} width={48} />
          </Col>
          <Col xs={18} lg={20}>
            <Title level={5} transform="capitalize" marginBottom="0">
              {title}
            </Title>
            <RateHolder
              character={<Icon type="duck" width={16} />}
              value={difficulty}
              disabled
            />
          </Col>
        </Row>
      </Box>
      <Paragraph size="preNormal">{truncate(desc, 120)}</Paragraph>
      <PillButton type="primary">Eat pill</PillButton>
    </PillCard>
  </GatsbyLink>
);

const SORTING_STRATEGY = {
  newest: 'Newest',
  difficulty: 'Difficulty',
};

const sortByNewest = (a, b) =>
  new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date);
const sortByDifficulty = (a, b) =>
  a.node.frontmatter.difficulty - b.node.frontmatter.difficulty;

const Pills = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState([]);
  const [sortingStrategy, setSortingStrategy] = useState(
    SORTING_STRATEGY.newest
  );
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

      const sortedSearchedFilteredEdges =
        sortingStrategy === SORTING_STRATEGY.newest
          ? [...searchedFilteredEdges].sort(sortByNewest)
          : [...searchedFilteredEdges].sort(sortByDifficulty);

      setSearchResult(sortedSearchedFilteredEdges);
    };

    filterAndSearchData();
  }, [edges, filters, searchTerm, sortingStrategy]);

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

  const handleSortClick = (sortingStrategy) =>
    setSortingStrategy(sortingStrategy);

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
      <Row justify="center">
        <Col xs={24} sm={16} lg={12}>
          <Form.Item name="searchTerm" style={{ marginBottom: '0.2rem' }}>
            <Input
              prefix={<SearchIcon />}
              placeholder="Search pills..."
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
            <Row justify="space-between">
              <Col>
                <Row gutter={[4, 8]}>
                  <Col>
                    <FilterButton
                      isActive={isActiveFilter('js')}
                      name="JavaScript"
                      onClick={() => handleFilterClick('js')}
                    />
                  </Col>
                  <Col>
                    <FilterButton
                      isActive={isActiveFilter('css')}
                      name="CSS"
                      onClick={() => handleFilterClick('css')}
                    />
                  </Col>
                  <Col>
                    <FilterButton
                      isActive={isActiveFilter('react')}
                      name="React"
                      onClick={() => handleFilterClick('react')}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <DropdownHolder
                  overlay={
                    <Menu>
                      <Menu.Item
                        key="1"
                        onClick={() => handleSortClick(SORTING_STRATEGY.newest)}
                      >
                        Newest
                      </Menu.Item>
                      <Menu.Item
                        key="2"
                        onClick={() =>
                          handleSortClick(SORTING_STRATEGY.difficulty)
                        }
                      >
                        Difficulty
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={['click']}
                >
                  <Paragraph
                    size="preNormal"
                    onClick={(e) => e.preventDefault()}
                    marginBottom="0"
                    style={{ marginTop: '0.25rem' }}
                    textOpacity={opacity.title}
                  >
                    <span>{sortingStrategy}</span>
                    <DownOutlined style={{ paddingLeft: '0.5rem' }} />
                  </Paragraph>
                </DropdownHolder>
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
          }) => (
            <Col xs={24} sm={12} key={id}>
              <Pill path={path} {...frontmatter} />
            </Col>
          )
        )}
      </Row>
      <Box margin="5rem 0">
        <SlackBanner />
      </Box>
    </Layout>
  );
};

export default Pills;
