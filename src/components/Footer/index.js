import React from "react";
import styled from "styled-components";
import Text from "../Text";
import Box from "../Box";
import { ExternalLink } from "../Link";

const StyledFooter = styled(Box)`
  width: 100%;
  max-width: 70ch;
  margin: 0 auto;
`;

const Footer = () => (
  <StyledFooter py="2">
    <Text>
      Made with {"♥"} by{" "}
      <ExternalLink href="https://jakerunzer.com">jake runzer</ExternalLink>
    </Text>
  </StyledFooter>
);

export default Footer;
