import React from 'react';

import { Layout, SEO, Section, Box } from '~components';
import {
  Quotes,
  Offer,
  AlternativeConversation,
  FAQ,
} from '~modules/mentorship';

const Mentorship = () => (
  <Layout fixedContent={false}>
    <Box mt={-4}>
      <SEO title="Mentorship | Get Into Frontend & Find Your First IT Job" />
      <Section fullWidth>
        <Offer />
      </Section>
      <Section fullWidth>
        <FAQ />
      </Section>
      {/* <Section fullWidth>
        <Quotes />
      </Section> */}
      <Section fullWidth>
        <AlternativeConversation />
      </Section>
    </Box>
  </Layout>
);

export default Mentorship;
