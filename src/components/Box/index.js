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
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
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
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
);

export default Box;
