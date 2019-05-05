import React from "react";
import styled from "styled-components";
import Link from "../Link";
import { H1 } from "../Header";
import Text from "../Text";
import Box from "../Box";
import { useStaticQuery, graphql } from "gatsby";

const links = [{ name: "Installation", to: "/installation" }];

const StyledSidebar = styled(Box)`
  min-height: 100vh;
`;

const Item = props => (
  <Box py={1}>
    <Text fontSize={3}>
      <Link to={props.to}>{props.children}</Link>
    </Text>
  </Box>
);

const Sidebar = props => {
  const data = useStaticQuery(query);
  const pages = data.allMdx.nodes;

  return (
    <StyledSidebar
      minWidth={[0, 250]}
      px={3}
      py={4}
      bg="primary"
      className="sidebar"
    >
      <Text fontSize={5} fontWeight="bold">
        <Link to="/" color="text">
          Krill
        </Link>
      </Text>
      {pages.map(node => (
        <Item key={node.fields.slug} to={node.fields.slug}>
          {node.frontmatter.title}
        </Item>
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;

const query = graphql`
  query SidebarQuery {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;
