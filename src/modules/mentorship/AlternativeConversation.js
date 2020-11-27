import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { openPopupWidget } from 'react-calendly';

import { Title, Paragraph, Button, Box } from '~components';

const openFreeConsultationEvent = () => {
  openPopupWidget({
    url: 'https://calendly.com/bigsondev/free-consultation',
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
    },
  });
};

const Holder = styled.div({
  padding: '5rem 1rem',
  position: 'relative',
  background: '#F5F5F5',
});

export const AlternativeConversation = () => {
  return (
    <Holder id="bigsondev-free-consultation">
      <Title level={2} align="center">
        Can't decide?
      </Title>
      <Row justify="center">
        <Col xs={20} sm={12}>
          <Paragraph align="center" breakParagraph>
            <div style={{ maxWidth: 420, margin: '0 auto' }}>
              Let's have an individual, 15 minutes free of charge conversation.
              Reserve a meeting by clicking on the button below.
            </div>
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} style={{ textAlign: 'center' }}>
          <Box margin="-2rem 0 0 0">
            <Button onClick={openFreeConsultationEvent} type="secondary">
              Reserve meeting via Calendly
            </Button>
          </Box>
        </Col>
      </Row>
    </Holder>
  );
};
