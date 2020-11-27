import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { MesfinTestimonial } from '~assets';
import { theme, Title, Paragraph, Box } from '~components';

const { fontWeight, spacing, colors } = theme;

const Holder = styled.div({
  position: 'relative',
});

const TestimonialImage = styled.img({
  width: '4rem',
  height: 'auto',
  borderRadius: '50%',
  textAlign: 'center',
  marginBottom: '1rem',
});

export const Testimonials = () => {
  return (
    <Holder id="bigsondev-free-consultation">
      <Box padding={`${spacing.extraLarge} 0`}>
        <figure>
          <Row justify="center">
            <Col span={20}>
              <Paragraph
                align="center"
                fontStyle="italic"
                size="preNormal"
                fontWeight={fontWeight.medium}
              >
                "I am proud of my decision to have mentorship from Adrian and
                work with him. He is not just only a guru on the technologies
                but also he is all in one package to help me progress and be a
                confident developer, I do recommend his services for anyone to
                try."
              </Paragraph>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <TestimonialImage src={MesfinTestimonial} alt="Mesfin - Mentee" />
            </Col>
            <Col span={24}>
              <Title
                level={4}
                align="center"
                fontStyle="italic"
                size="preNormal"
                transform="none"
                marginBottom="0"
                color={colors.primary}
                fontWeight={fontWeight.medium}
              >
                Mesfin
              </Title>
            </Col>
            <Col span={24}>
              <Paragraph size="small" align="center">
                Aspiring Frontend Developer
              </Paragraph>
            </Col>
          </Row>
        </figure>
      </Box>
    </Holder>
  );
};
