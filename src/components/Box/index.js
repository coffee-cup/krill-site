import styled from "styled-components";
import {
  space,
  color,
  width,
  minWidth,
  fontSize,
  flex,
  alignSelf,
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
  flex,
  alignSelf,
  order,
);

export default Box;
