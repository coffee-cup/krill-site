import styled from "styled-components";
import React from "react";
import { color, space, fontSize } from "styled-system";
import { makeAnchor } from "../../utils";

export const Header = styled.h1`
  ${color}
  ${space}
  ${fontSize}
`;

export const H1 = props => (
  <Header as="h1" id={makeAnchor(props.children)} {...props} />
);
export const H2 = props => (
  <Header as="h2" id={makeAnchor(props.children)} {...props} />
);
export const H3 = props => <Header as="h3" {...props} />;

export const Title = props => <Header as="h1" fontSize={[100]} {...props} />;
