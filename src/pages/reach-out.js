import React from 'react';
import { Divider } from 'antd';

import { Layout, SEO, Title, Paragraph, Box } from '~components';
import { ReachOutForm } from '~modules/reach-out';

const ReachOut = () => (
  <Layout>
    <SEO title="Reach Out | Let's Talk About Your Frontend Career & Ask About Anything" />
    <Title level={2}>It never hurts to ask</Title>
    <Divider />
    <Title level={3} align="center">
      And it never hurts to help.
    </Title>
    <Box mb={5}>
      <Paragraph align="center" type="secondary" size="preNormal">
        Ask about anything and sincere thank you for taking the time.
      </Paragraph>
    </Box>
    <ReachOutForm />
  </Layout>
);

export default ReachOut;
