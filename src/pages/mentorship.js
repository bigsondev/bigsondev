import React from 'react';

import { theme, Layout, SEO, Section } from '~components';
import { Offer, Testimonials, FAQ } from '~modules/mentorship';

const { colors } = theme;

const Mentorship = () => (
  <Layout fixedContent={false}>
    <SEO
      title="Mentorship"
      desc="Stop getting stuck in tutorials hell, learn Frontend with a seasoned Mentor, ex Lead Frontend Developer, and change your career for good."
      url="https://bigsondev.com/mentorship/"
    />
    <Section>
      <Offer />
    </Section>
    <Section backgroundColor={colors.grayLevelTwo}>
      <FAQ />
    </Section>
    <Section>
      <Testimonials />
    </Section>
  </Layout>
);

export default Mentorship;
