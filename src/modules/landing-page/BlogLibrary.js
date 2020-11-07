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
        Theory & Practice
      </Title>
      <Row justify="center">
        <Col xs={20} sm={12}>
          <Paragraph align="center" breakParagraph>
            <div style={{ maxWidth: 420, margin: '0 auto' }}>
              Expertise knowledge and real-world projects, code challenges,
              quizes. I've put my heart into it to make learning easier for you.
            </div>
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} style={{ textAlign: 'center' }}>
          <Box margin="-2rem 0 0 0">
            <Link to="/blog/">
              <SecondaryButton>Blog</SecondaryButton>
            </Link>
            <Link to="/library/">
              <SecondaryButton>Library</SecondaryButton>
            </Link>
          </Box>
        </Col>
      </Row>
    </Holder>
  );
};
