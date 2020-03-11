import React from "react";
import styled from "styled-components";
import Link from "../Link";
import Text from "../Text";
import Box from "../Box";
import Logo from "../Logo";
import { useStaticQuery, graphql } from "gatsby";
import { makeAnchor } from "../../utils";
import { sidebarWidth, forNarrowScreen } from "../../styles";

const StyledSidebar = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  min-height: 100vh;
  overflow-y: auto;
  z-index: 9999;

  transition: transform 250ms ease-out;

  ${props => !props.isOpen && forNarrowScreen`transform: translate(-100%);`}
`;

const PageHeading = props => (
  <Box pt={1} pb={0}>
    <Text
      fontSize={2}
      fontWeight={400}
      mb={0}
      style={{ marginBottom: "0.25rem" }}
    >
      <Link to={props.to} color={`${props.active ? "secondary" : "#3e3e3e"}`}>
        {props.children}
      </Link>
    </Text>
  </Box>
);

const SubHeading = props => (
  <Box py={0} pl={3}>
    <Text fontSize={1} style={{ marginBottom: "0.5rem" }}>
      <Link color="text" to={props.to}>
        {props.children}
      </Link>
    </Text>
  </Box>
);

const Section = props => (
  <Box>
    {props.headings
      .filter(({ depth }) => depth <= (props.active ? 2 : 1))
      .map(({ value, depth }, i) =>
        depth === 1 ? (
          <PageHeading
            key={i}
            text={value}
            to={props.slug}
            active={props.active}
          >
            {value}
          </PageHeading>
        ) : (
          <SubHeading
            key={i}
            text={value}
            to={`${props.slug}#${makeAnchor(value)}`}
          >
            {value}
          </SubHeading>
        ),
      )}
  </Box>
);

const LogoButton = () => (
  <Box display="flex" alignItems="center" mt={1} mb={3} className="logo">
    <Logo />
  </Box>
);

const Sidebar = props => {
  const data = useStaticQuery(query);
  const pages = data.allMdx.nodes;
  const currentPath = props.location.pathname;

  return (
    <StyledSidebar
      minWidth={[sidebarWidth]}
      px={3}
      pt={5}
      pb={4}
      bg="primary"
      className="sidebar"
      isOpen={props.isOpen}
    >
      <Box>
        <LogoButton />
        <Section
          slug="/"
          headings={[{ value: "Introduction", depth: 1 }]}
          active={currentPath === "/"}
        />
        {pages.map(node => (
          <Section
            key={node.fields.slug}
            slug={node.fields.slug}
            headings={node.headings}
            active={currentPath === node.fields.slug}
          />
        ))}
      </Box>
    </StyledSidebar>
  );
};

export default Sidebar;

const query = graphql`
  query SidebarQuery {
    allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
      nodes {
        headings {
          value
          depth
        }
        fields {
          slug
        }
      }
    }
  }
`;
