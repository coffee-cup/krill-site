import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Box from "../components/Box";
import Link from "../components/Link";
import Code from "../components/Code";
import Text from "../components/Text";
import { Title } from "../components/Header";

const frontExample = `
even = x -> x % 2 == 0
square = x -> x * x
sumOddSquares = sum . filter (not . even) . map square
sumOddSquares [1..100]
# => 166650
`;

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.siteTitle;

  return (
    <Layout title={siteTitle}>
      <SEO />
      <Box>
        <Title mt={4}>Krill</Title>
        <Box>
          <Text>
            Dynamic, curried, and minimal programming language. Find the
            implementation on{" "}
            <Link as="a" href="https://github.com/coffee-cup/krill">
              Github
            </Link>
            .
          </Text>
          <Code language="haskell" codeString={frontExample} />
          <Text>
            Krill was created as an experiement to learn about programming
            language design. Head to{" "}
            <Link to="/getting-started/">getting started</Link> to learn more.
          </Text>
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
