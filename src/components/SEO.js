import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

function SEO(props) {
  const data = useStaticQuery(query);
  const meta = data.site.siteMetadata;

  const title =
    props.title != null
      ? `${props.title} | ${meta.siteShortTitle}`
      : meta.siteShortTitle;
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
      />

      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={meta.description} />

      {meta.image && <meta name="image" content={meta.image} />}

      {/* OpenGraph tags */}
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={meta.description} />
      {meta.image && <meta property="og:image" content={meta.image} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={meta.userTwitter ? meta.userTwitter : ""}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.image && <meta name="twitter:image" content={meta.image} />}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
};

export default SEO;

const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        siteShortTitle
        description
        author
        url
      }
    }
  }
`;
