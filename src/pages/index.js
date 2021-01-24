import React from 'react';
import { graphql } from 'gatsby';

import { theme, Layout, Section, SEO } from '~components';
import {
  Promo,
  SkyrocketYourCareer,
  BlogLibrary,
  WhoIAm,
  Newsletter,
} from '~modules/landing-page';

const { colors } = theme;

export const pageQuery = graphql`
  query HomeQuery {
    mainImage: file(base: { eq: "main-graphic.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Landing = ({
  data: {
    mainImage: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout fixedContent={false}>
      <SEO title="Seasoned Frontend Mentor" />
      <Section>
        <Promo fluid={fluid} />
      </Section>
      <Section backgroundColor={colors.grayLevelTwo}>
        <SkyrocketYourCareer />
      </Section>
      <Section>
        <BlogLibrary />
      </Section>
      <Section backgroundColor={colors.grayLevelTwo}>
        <div id="pupa">
          <WhoIAm />
        </div>
      </Section>
      <Section>
        <Newsletter />
      </Section>
    </Layout>
  );
};

export default Landing;
