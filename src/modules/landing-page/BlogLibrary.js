import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Title, Paragraph, SecondaryButton, Box } from '~components';

const Holder = styled.div({
  padding: '7rem 1rem',
  width: '100vw',
  position: 'relative',
});

export const BlogLibrary = () => {
  return (
    <Holder>
      <Title level={2} align="center">
        I focus on you
      </Title>
      <Row justify="center">
        <Col xs={20} sm={12}>
          <Paragraph align="center" breakParagraph>
            Feel free to read an article or two, practice your coding skills,
            and maybe do a Quiz.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} style={{ textAlign: 'center' }}>
          <Box margin="-2rem 0 0 0">
            <Link to="/blog">
              <SecondaryButton>Visit Blog</SecondaryButton>
            </Link>
            <Link to="/library">
              <SecondaryButton>Visit Library</SecondaryButton>
            </Link>
          </Box>
        </Col>
      </Row>
    </Holder>
  );
};
