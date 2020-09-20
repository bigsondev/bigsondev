import React from 'react';

import { Layout, Section, SEO, Box } from '~components';
import {
  NewsletterForm,
  Promo,
  SkyrocketYourCareer,
} from '~modules/landing-page';

const Landing = () => {
  return (
    <Layout fixedContent={false}>
      <SEO title="Bigson Dev - Front-end Developer, Recruiter, Mentor & Your Friend" />
      <Box mb={5}>
        <Section>
          <Promo />
        </Section>
      </Box>
      <Section fullWidth>
        <SkyrocketYourCareer />
      </Section>
      <NewsletterForm />
    </Layout>
  );
};

export default Landing;
