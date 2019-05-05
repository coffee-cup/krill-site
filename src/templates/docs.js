import React from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { rhythm, scale } from "../utils/typography";
import Box from "../components/Box";

const Docs = ({ data }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.siteTitle;

  return (
    <Layout title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <Box p={4}>
        <MDXRenderer>{post.code.body}</MDXRenderer>
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
