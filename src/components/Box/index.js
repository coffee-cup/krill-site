import styled from "styled-components";
import {
  space,
  color,
  width,
  minWidth,
  fontSize,
  display,
  flex,
  flexDirection,
  alignItems,
  justifyContent,
  order,
} from "styled-system";

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  color,
  width,
  minWidth,
  fontSize,
  display,
  flex,
  flexDirection,
  alignItems,
  justifyContent,
  order,
);

export default Box;
