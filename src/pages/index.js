import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Box from "../components/Box";
import Text from "../components/Text";
import Link from "../components/Link";
import { H1 } from "../components/Header";

const frontExample = `
odd = x -> x % 2 != 0
fact = n -> if n == 0 then 1 else n * fact (n - 1)
filter (not . odd) $ map fact [0..5]
# => [2,6,24,120]
`;

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.siteTitle;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Box>
        <H1>Krill</H1>
        <Box>
          Immutable, curried, and minimal programming language. Find the
          implementation on{" "}
          <Link to="https://github.com/coffee-cup/krill">Github</Link>
          <Text>{frontExample}</Text>
        </Box>
      </Box>
    </Layout>
  );
};

Home.propTypes = {
  data: PropTypes.object,
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`;
