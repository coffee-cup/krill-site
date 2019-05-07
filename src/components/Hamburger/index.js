import React from "react";
import styled from "styled-components";
import Box from "../Box";

const width = "25px";
const height = "3px";

const Container = styled(Box)`
  .bar {
    width: ${width};
    height: ${height};
    background-color: #ababab;
    margin: 4px 0;
  }
`;

const Hamburger = () => (
  <Container>
    <div className="bar" />
    <div className="bar" />
    <div className="bar" />
  </Container>
);

Hamburger.displayName = "Hamburger";

export default Hamburger;
