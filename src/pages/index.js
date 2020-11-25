import React from 'react';

import { Layout, Section, SEO, Box, SlackBanner } from '~components';
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
      <SEO title="Frontend Mentor" />
      <Section>
        <Promo />
      </Section>
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
      <Section>
        <Box mb={20}>
          <SlackBanner />
        </Box>
      </Section>
    </Layout>
  );
};

export default Landing;
