import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Title, Paragraph, SecondaryButton, Box } from '~components';

const Holder = styled.div({
  padding: '7rem 1rem',
  position: 'relative',
});

export const AlternativeConversation = () => {
  return (
    <Holder>
      <Title level={2} align="center">
        Can't decide?
      </Title>
      <Row justify="center">
        <Col xs={20} sm={12}>
          <Paragraph align="center" breakParagraph>
            Let's have an individual, free conversation to see what will be the
            best for you.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} style={{ textAlign: 'center' }}>
          <Box margin="-2rem 0 0 0">
            <Link to="/reach-out/">
              <SecondaryButton>Reach Out</SecondaryButton>
            </Link>
          </Box>
        </Col>
      </Row>
    </Holder>
  );
};
