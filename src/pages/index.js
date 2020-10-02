import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

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
    <PageTransition>
      <Layout fixedContent={false}>
        <SEO title="Frontend Developer, Recruiter, Mentor & Your Friend" />
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
    </PageTransition>
  );
};

export default Landing;
