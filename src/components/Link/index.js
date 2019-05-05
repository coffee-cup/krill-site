import React from "react";
import { Link as GLink } from "gatsby";
import Text from "../Text";
import styled from "styled-components";
import { color } from "styled-system";

const StyledGLink = styled(GLink)`
  ${color}
  text-decoration: none;
`;

const Link = props => (
  <StyledGLink color="text" {...props}>
    <Text>{props.children}</Text>
  </StyledGLink>
);

export default Link;
