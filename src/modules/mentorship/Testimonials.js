import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import {
  MesfinTestimonial,
  BenjaminTestimonial,
  MiguelTestimonial,
} from '~assets';
import { theme, Title, Paragraph, Box, Link } from '~components';

const { fontWeight, spacing, colors } = theme;

const Holder = styled.div({
  position: 'relative',
});

const TestimonialImage = styled.img({
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  textAlign: 'center',
  marginBottom: '1rem',
});

const Testimonial = ({ desc, src, alt, name, title }) => (
  <Row justify="center" style={{ height: '100%' }}>
    <Col span={20} style={{ marginBottom: '1.5rem' }}>
      <Paragraph
        align="center"
        fontStyle="italic"
        size="preNormal"
        fontWeight={fontWeight.medium}
      >
        {desc}
      </Paragraph>
    </Col>
    <Col span={24} style={{ marginTop: 'auto' }}>
      <Col span={24} style={{ textAlign: 'center' }}>
        <TestimonialImage src={src} alt={alt} />
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
          {name}
        </Title>
      </Col>
      <Col span={24}>
        <Paragraph size="small" align="center">
          {title}
        </Paragraph>
      </Col>
    </Col>
  </Row>
);

export const Testimonials = () => {
  return (
    <Holder id="bigsondev-free-consultation">
      <Box padding={`${spacing.extraLarge} 0`}>
        <Row justify="center" gutter={[24, 24]}>
          <Col xs={24} lg={12} xl={8}>
            <Testimonial
              desc={`"I am proud of my decision to have mentorship from Adrian and
                work with him. He is not just only a guru on the technologies
                but also he is all in one package to help me progress and be a
                confident developer, I do recommend his services for anyone to
                try."`}
              src={MesfinTestimonial}
              alt="Mesfin - Mentee testimonial"
              name="Mesfin"
              title="Aspiring Frontend Developer"
            />
          </Col>
          <Col xs={24} lg={12} xl={8}>
            <Testimonial
              desc={`"Adrian is an amazing mentor, giving you a clear path for success in web development that is designed around YOU. My skills as a web developer are skyrocketing because now I know what I need to be doing and where I should be going. I can't recommend him enough!"`}
              src={BenjaminTestimonial}
              alt="Benjamin - Mentee testimonial"
              name="Benjamin"
              title="Skyrocketing Frontend Developer"
            />
          </Col>
          <Col xs={24} lg={12} xl={8}>
            <Testimonial
              desc={`"I am so grateful for Adrian's mentorship. Adrian develops an individualized plan for each mentee and you can tell that he really does care about his mentees and is willing to go above and beyond for them. He not only teaches industry standard technologies but also gives coding life hacks to take your programming to the next level - something University never gave me."`}
              src={MiguelTestimonial}
              alt="Miguel - Mentee testimonial"
              name="Miguel"
              title="Fullstack Developer soon"
            />
          </Col>
          <Col span={24}>
            <Paragraph
              align="center"
              strong
              size="preNormal"
              type="secondary"
              marginBottom="0"
            >
              More testimonials about my services can be found on{' '}
              <Link
                size="preNormal"
                href="https://www.reddit.com/r/testimonials/search?q=BigsonDev&restrict_sr=on&include_over_18=on&sort=relevance&t=all"
              >
                reddit
              </Link>
              .
            </Paragraph>
          </Col>
        </Row>
      </Box>
    </Holder>
  );
};
