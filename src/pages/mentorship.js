import React from 'react';

import { theme, Layout, SEO, Section } from '~components';
import { Offer, Testimonials, FAQ } from '~modules/mentorship';

const { colors } = theme;

const Mentorship = () => (
  <Layout fixedContent={false}>
    <SEO
      title="Mentorship"
      desc="Find Your First Job in IT & Improve As A Frontend Developer"
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
