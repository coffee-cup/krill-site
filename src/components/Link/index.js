import React from "react";
import { Link as GLink } from "gatsby";
import Text from "../Text";
import styled from "styled-components";
import { color } from "styled-system";

const StyledGLink = styled(GLink)`
  ${color}
  text-decoration: none;
  transition: opacity 150ms ease-in-out;

  &:hover {
    text-decoration: none;
    opacity: 0.6;
  }
`;

const Link = props => (
  <StyledGLink color="secondary" {...props}>
    <Text as="span">{props.children}</Text>
  </StyledGLink>
);

export default Link;
