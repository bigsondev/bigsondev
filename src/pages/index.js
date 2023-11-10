import React from 'react';
import { graphql } from 'gatsby';

import { theme, Layout, Section, SEO, BdsPlug } from '~components';
import { Promo, BlogLibrary, WhoIAm } from '~modules/landing-page';

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
    firstProject: file(base: { eq: "quiz-app.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    secondProject: file(base: { eq: "music-player.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    thirdProject: file(base: { eq: "level-editor.png" }) {
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
      <SEO title="Adrian Bigaj" />
      <Section>
        <Promo fluid={fluid} />
      </Section>
      <Section>
        <BlogLibrary
          firstProject={firstProjectFluid}
          secondProject={secondProjectFluid}
          thirdProject={thirdProjectFluid}
        />
      </Section>
      <Section backgroundColor={colors.grayLevelTwo}>
        <WhoIAm fluid={adrianImageFluid} />
      </Section>
      <Section>
        <BdsPlug />
      </Section>
    </Layout>
  );
};

export default Landing;
