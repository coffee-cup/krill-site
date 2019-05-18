import React from "react";
import Box from "../components/Box";
import PropTypes from "prop-types";
import Sidebar from "../components/Sidebar";
import Text from "../components/Text";
import Hamburger from "../components/Hamburger";
import styled from "styled-components";
import { ExternalLink } from "../components/Link";
import { H1, H2, H3 } from "../components/Header";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme, sidebarWidth, forNarrowScreen, forWideScreen } from "../styles";
import { Location } from "@reach/router";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.bg}
    scroll-behavior: smooth;
  }
`;

const components = {
  p: Text,
  h1: H1,
  h2: H2,
  h3: H3,
  a: ExternalLink,
};

const Content = styled.div`
  width: 100%;
  min-height: 100%;
  max-width: 70ch;
  margin: 0 auto;
`;

const ContentWrapper = styled(Box)`
  ${forWideScreen`width: calc(100vw - ${sidebarWidth + 16}px);`}
  margin-left: ${sidebarWidth}px;

  transition: margin-left: 250ms ease-out;

  ${forNarrowScreen`margin-left: 0`}
`;

const StyledSidebarButton = styled(Box)`
  cursor: pointer;
  display: none;
  z-index: 1000;

  ${forNarrowScreen`display: block;`};
`;

const Overlay = styled(Box)`
  background-color: black;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: none;

  opacity: 0;
  transition: opacity 250ms ease-in-out;

  ${forNarrowScreen`display: block;`}
  ${props => !props.isOpen && forNarrowScreen`transform: translateX(-100%);`};
  ${props => props.isOpen && forNarrowScreen`opacity: 0.6;`};
`;

const SidebarButton = ({ onClick, ...props }) => (
  <StyledSidebarButton onClick={onClick} {...props}>
    <Hamburger />
  </StyledSidebarButton>
);

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <Location>
      {({ location }) => (
        <MDXProvider components={components}>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle />
              <Box display="flex" className="wrapper">
                <Sidebar isOpen={isSidebarOpen} location={location} />

                <Box display="flex" flexDirection="column">
                  <SidebarButton
                    px={[3, 3, 4]}
                    mt={3}
                    onClick={() => setSidebarOpen(true)}
                  />
                  <ContentWrapper mt={[-2, 4]} px={[3, 3, 4]}>
                    <Content className="content">{children}</Content>
                  </ContentWrapper>
                </Box>
                <Overlay
                  className="overlay"
                  isOpen={isSidebarOpen}
                  onClick={() => setSidebarOpen(false)}
                />
              </Box>
            </>
          </ThemeProvider>
        </MDXProvider>
      )}
    </Location>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
