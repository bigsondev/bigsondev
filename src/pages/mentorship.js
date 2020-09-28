import React from 'react';

import { Layout, SEO, Section, Box } from '~components';
import { Quotes, Offer, AlternativeConversation } from '~modules/mentorship';

const Mentorship = () => {
  return (
    <Layout fixedContent={false}>
      <Box mt={-4}>
        <SEO title="BigsonDev - Frontend Developer, Recruiter, Mentor & Your Friend" />
        <Section fullWidth>
          <Quotes />
        </Section>
        <Section fullWidth>
          <Offer />
        </Section>
        <Section fullWidth>
          <AlternativeConversation />
        </Section>
      </Box>
    </Layout>
  );
};

export default Mentorship;
