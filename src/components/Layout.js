import Box from "../components/Box";
import PropTypes from "prop-types";
import React from "react";
import Sidebar from "../components/Sidebar";
import Text from "../components/Text";
import styled from "styled-components";
import { H1, H2, H3 } from "../components/Header";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../styles";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.bg}
  }
`;

const components = {
  p: Text,
  h1: H1,
  h2: H2,
  h3: H3,
};

const Content = styled.div`
  width: 100%;
  min-height: 100%;
  max-width: 70ch;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Box display="flex" className="wrapper">
            <Sidebar />
            <Content className="content">{children}</Content>
          </Box>
        </>
      </ThemeProvider>
    </MDXProvider>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
