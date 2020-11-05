import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { openPopupWidget } from 'react-calendly';

import { Title, Paragraph, SecondaryButton, Box } from '~components';

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
            Let's have an individual, 15 minutes free of charge conversation to
            see what will be the best for you.
            <br />
            Reserve a meeting via Calendly by clicking on the below button.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} style={{ textAlign: 'center' }}>
          <Box margin="-2rem 0 0 0">
            <SecondaryButton onClick={openFreeConsultationEvent}>
              Reach Out
            </SecondaryButton>
          </Box>
        </Col>
      </Row>
    </Holder>
  );
};
