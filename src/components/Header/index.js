import styled from "styled-components";
import React from "react";
import { color, space, fontSize } from "styled-system";

export const Header = styled.h1`
  ${color}
  ${space}
  ${fontSize}
`;

export const H1 = props => <Header as="h1" {...props} />;
export const H2 = props => <Header as="h2" {...props} />;
export const H3 = props => <Header as="h3" {...props} />;

export const Title = props => <Header as="h1" fontSize={[100]} {...props} />;
