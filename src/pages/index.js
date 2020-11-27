import React from 'react';

import { theme, Layout, Section, SEO } from '~components';
import {
  Promo,
  SkyrocketYourCareer,
  BlogLibrary,
  WhoIAm,
  Newsletter,
} from '~modules/landing-page';

const { colors } = theme;

const Landing = () => {
  return (
    <Layout fixedContent={false}>
      <SEO title="Frontend Mentor" />
      <Section>
        <Promo />
      </Section>
      <Section backgroundColor={colors.grayLevelTwo}>
        <SkyrocketYourCareer />
      </Section>
      <Section>
        <BlogLibrary />
      </Section>
      <Section backgroundColor={colors.grayLevelTwo}>
        <WhoIAm />
      </Section>
      <Section>
        <Newsletter />
      </Section>
    </Layout>
  );
};

export default Landing;
