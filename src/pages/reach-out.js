import React from 'react';
import { Divider } from 'antd';

import { Layout, SEO, Title, Paragraph, Box } from '~components';
import { ReachOutForm } from '~modules/reach-out';

const ReachOut = () => (
  <Layout>
    <SEO title="Reach Out | Let's Talk About Your Frontend Career | Ask About Anything" />
    <Title level={2} align="center">
      It never hurts to ask
    </Title>
    <Paragraph align="center">
      Ask about anything and sincere thank you for taking the time.
    </Paragraph>
    <Divider />
    <Box padding="0 0 5rem 0">
      <ReachOutForm />
    </Box>
  </Layout>
);

export default ReachOut;
