import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Title, Paragraph, Box, PostList } from '~components';

const Holder = styled.div({
  padding: '96px 16px',
  width: '100vw',
  position: 'relative',
});

export const BlogLibrary = () => {
  return (
    <Holder>
      <Box mb={10}>
        <Title level={2} align="center">
          I focus on you
        </Title>
        <Paragraph align="center" fontWeight="200" breakParagraph>
          Feel free to read an article or two, practice your coding skills, and
          maybe do a Quiz.
        </Paragraph>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} sm={12} md={10} lg={8} xl={6} xxl={5}>
            <Title level={4} align="center">
              <Link to="/blog">Blog</Link>
            </Title>
            <PostList
              data={[
                'Improve by reading articles',
                'Gain knowledge with cheat sheets',
                'Practice by doing homework',
              ]}
            />
          </Col>
          <Col xs={24} sm={12} md={10} lg={8} xl={6} xxl={5}>
            <Title level={4} align="center">
              <Link to="/library">Library</Link>
            </Title>
            <PostList
              data={[
                'Learn Frontend with resources links',
                'Have fun doing coding challenges',
                `Test what you've learned in a quiz`,
              ]}
            />
          </Col>
        </Row>
      </Box>
    </Holder>
  );
};
