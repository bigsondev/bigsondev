import React from 'react';
import { Divider } from 'antd';

import { Layout, SEO, Title } from '~components';
import { NewsletterForm } from '~modules/landing-page';

const Landing = () => {
  return (
    <Layout>
      <SEO title="Bigson Dev - Coach, Frontend Tech Leader, Your Friend" />
      <Title>LANDING PAGE PLACEHOLDER</Title>
      <Divider />
      <NewsletterForm />
    </Layout>
  );
};

export default Landing;
