import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Box from "../components/Box";

const Docs = ({ data }) => {
  const siteTitle = data.site.siteMetadata.siteTitle;

  return (
    <Layout title={siteTitle}>
      <SEO title={data.mdx.frontmatter.title} />
      <Box>
        <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
      </Box>
    </Layout>
  );
};

Docs.propTypes = {
  data: PropTypes.object,
};

export default Docs;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteTitle
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;
