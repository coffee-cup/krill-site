import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../styles";
import { H1, H2, H3 } from "../components/Header";
import Text from "../components/Text";
import Sidebar from "../components/Sidebar";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

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

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  max-width: 70ch;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Wrapper>
            <Sidebar />
            <Content className="content">{children}</Content>
          </Wrapper>
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
