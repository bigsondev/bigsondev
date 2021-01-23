/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { MainImage } from '~assets';

export function SEO({
  url,
  desc,
  lang,
  meta,
  type = 'website',
  title,
  image = MainImage,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            keywords
            author
            domain
          }
        }
      }
    `
  );

  const metaDescription = desc || site.siteMetadata.description;
  const metaUrl = url || site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          property: 'og:site_name',
          content: site.siteMetadata.domain,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:image`,
          content: `https://bigsondev.com${image}`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.domain,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: `https://bigsondev.com${image}`,
        },
      ].concat(meta)}
    >
      <link rel="canonical" href="https://bigsondev.com/" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};
