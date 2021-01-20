import React from 'react';
import { Row, Col, Carousel } from 'antd';
import styled from 'styled-components';

import {
  MesfinTestimonial,
  BenjaminTestimonial,
  MiguelTestimonial,
  AngelTestimonial,
  ScottTestimonial,
} from '~assets';
import { theme, Title, Paragraph, Box, Link } from '~components';

const { fontSize, fontWeight, spacing, colors } = theme;

const CarouselHolder = styled(Carousel)({
  marginBottom: '2rem',

  '& .slick-dots-bottom': {
    bottom: 0,
  },

  '& .slick-dots > li > button': {
    backgroundColor: `${colors.primary} !important`,
  },

  '& .slick-dots > .slick-active > button': {
    backgroundColor: `${colors.promo} !important`,
  },
});

const TestimonialImage = styled.img({
  width: '6rem',
  height: '6rem',
  borderRadius: '50%',
  textAlign: 'center',
  margin: '0 auto 0.5rem auto',
});

const Testimonial = ({ desc, src, alt, name, title }) => (
  <Row justify="center" style={{ height: '100%' }}>
    <Col span={24} style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <TestimonialImage src={src} alt={alt} />
    </Col>
    <Col span={20}>
      <Paragraph
        align="center"
        fontStyle="italic"
        size="preNormal"
        fontWeight={fontWeight.medium}
        marginBottom="3rem"
      >
        {desc}
      </Paragraph>
    </Col>
    <Col span={24} style={{ marginTop: 'auto' }}>
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
    <Box padding={`${spacing.extraLarge} 0`}>
      <Title
        transform="none"
        align="center"
        marginBottom={spacing.large}
        color={colors.primary}
        fontSize={fontSize.superLarge}
        fontWeight={fontWeight.stronger}
      >
        What they say{' '}
        <span role="img" aria-label="Not looking">
          🙈
        </span>
      </Title>
      <CarouselHolder autoplay autoplaySpeed={5000}>
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
        <Testimonial
          desc={`"Adrian is an amazing mentor, giving you a clear path for success in web development that is designed around YOU. My skills as a web developer are skyrocketing because now I know what I need to be doing and where I should be going. I can't recommend him enough!"`}
          src={BenjaminTestimonial}
          alt="Benjamin - Mentee testimonial"
          name="Benjamin"
          title="Skyrocketing Frontend Developer"
        />
        <Testimonial
          desc={`"I am so grateful for Adrian's mentorship. Adrian develops an individualized plan for each mentee and you can tell that he really does care about his mentees and is willing to go above and beyond for them. He not only teaches industry standard technologies but also gives coding life hacks to take your programming to the next level - something University never gave me."`}
          src={MiguelTestimonial}
          alt="Miguel - Mentee testimonial"
          name="Miguel"
          title="Fullstack Developer soon"
        />
        <Testimonial
          desc={`"BigsonDev is the best mentor I have worked with. He can help you in all aspects of developing your career as a web developer, from seeing the big picture of any application, to the smallest details you have to deal with."`}
          src={AngelTestimonial}
          alt="Angel - Mentee testimonial"
          name="Angel"
          title="Frontend Engineer"
        />
        <Testimonial
          desc={`"I just had my first mentorship session today, and it was great! The amount of essential knowledge and tips I was given is extremely hard to find anywhere else on the web. I highly recommend anyone who wants's to take their front-end career to the next level to try BigsonDev mentorship program."`}
          src={ScottTestimonial}
          alt="Scott - Mentee testimonial"
          name="Scott"
          title="Graphic Designer"
        />
      </CarouselHolder>
      <Paragraph
        align="center"
        strong
        size="preNormal"
        type="secondary"
        marginBottom="0"
      >
        All testimonials about my services can be found on{' '}
        <Link
          size="preNormal"
          href="https://www.reddit.com/r/testimonials/search?q=BigsonDev&restrict_sr=on&include_over_18=on&sort=relevance&t=all"
        >
          reddit
        </Link>
        .
      </Paragraph>
    </Box>
  );
};
