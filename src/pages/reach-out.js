import React from 'react';
import { Divider } from 'antd';

import { Layout, SEO, Title, Paragraph } from '~components';
import { ReachOutForm } from '~modules/reach-out';

const ReachOut = () => (
  <Layout>
    <SEO title="Bigson Dev | Reach Out | Adrian Bigaj" />
    <Title>It never hurts to ask</Title>
    <Divider />
    <Title level={3} align="center">
      And it never hurts to help.
    </Title>
    <Paragraph align="center" type="secondary" breakParagraph>
      Ask about anything and sincere thank you for taking the time.
    </Paragraph>
    <ReachOutForm />
  </Layout>
);

export default ReachOut;
