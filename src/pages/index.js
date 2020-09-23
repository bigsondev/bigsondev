import React from 'react';

import { Layout, Section, SEO, Box } from '~components';
import {
  Promo,
  SkyrocketYourCareer,
  BlogLibrary,
  WhoIAm,
  Newsletter,
} from '~modules/landing-page';

const Landing = () => {
  return (
    <Layout fixedContent={false}>
      <SEO title="BigsonDev - Front-end Developer, Recruiter, Mentor & Your Friend" />
      <Box mb={5}>
        <Section>
          <Promo />
        </Section>
      </Box>
      <Section fullWidth>
        <SkyrocketYourCareer />
      </Section>
      <Section fullWidth>
        <BlogLibrary />
      </Section>
      <Section fullWidth>
        <WhoIAm />
      </Section>
      <Section fullWidth>
        <Newsletter />
      </Section>
    </Layout>
  );
};

export default Landing;
