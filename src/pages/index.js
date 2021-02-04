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
    mainImage: file(base: { eq: "main-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    adrianImage: file(base: { eq: "adrian-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    firstProject: file(base: { eq: "business-card.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    secondProject: file(base: { eq: "foodtruck.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    thirdProject: file(base: { eq: "note-app.jpg" }) {
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
    adrianImage: {
      childImageSharp: { fluid: adrianImageFluid },
    },
    firstProject: {
      childImageSharp: { fluid: firstProjectFluid },
    },
    secondProject: {
      childImageSharp: { fluid: secondProjectFluid },
    },
    thirdProject: {
      childImageSharp: { fluid: thirdProjectFluid },
    },
  },
}) => {
  return (
    <Layout fixedContent={false}>
      <SEO title="Frontend Mentor" />
      <Section>
        <Promo fluid={fluid} />
      </Section>
      <Section backgroundColor={colors.grayLevelTwo}>
        <SkyrocketYourCareer />
      </Section>
      <Section>
        <BlogLibrary
          firstProject={firstProjectFluid}
          secondProject={secondProjectFluid}
          thirdProject={thirdProjectFluid}
        />
      </Section>
      <Section backgroundColor={colors.grayLevelTwo}>
        <div id="pupa">
          <WhoIAm fluid={adrianImageFluid} />
        </div>
      </Section>
      <Section>
        <Newsletter />
      </Section>
    </Layout>
  );
};

export default Landing;
