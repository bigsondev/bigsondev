import React from 'react';

import { Layout, SEO, Section, Box } from '~components';
import { Quotes, Offer, AlternativeConversation } from '~modules/mentorship';

const Mentorship = () => (
  <Layout fixedContent={false}>
    <Box mt={-4}>
      <SEO title="Mentorship | Get Into Frontend & Find Your First IT Job In No Time" />
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

export default Mentorship;
