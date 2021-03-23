import React from "react";
import styled from "styled-components";

import { VARIANTS, SIZES } from "./constants";

const Button = ({ variant, size, children }) => {
  const sizeVariant = SIZES[size];
  const { base, focus, hover } = VARIANTS[variant];

  return (
    <Wrapper style={{ ...base, ...focus, ...hover, ...sizeVariant }}>
      <span>{children}</span>
    </Wrapper>
  );
};

//This styles the button base (including dynamic sizing)
const Base = styled.button`
  background-position: center;
  border-radius: 4px;
  display: block;
  padding: var(--paddingY) var(--paddingX);
  padding-top: var(--paddingTop);
  height: var(--height);
  font-family: "Roboto";
  font-size: var(--fontSize);
  font-weight: 500;
  text-align: center;
  width: var(--width);
  
  & span {
    display: block;
  }
  `;

//This styles the button variants
const Wrapper = styled(Base)`
  background-color: var(--baseBgColor);
  border: var(--baseBorder);
  color: var(--baseColor);

  &:focus {
    background-color: var(--focusBgColor);
    border: var(--focusBorder);
    box-shadow: var(--focusBoxShadow);
  }

  &:hover {
    background-color: var(--hoverBgColor);
    border: var(--hoverBorder);
    color: var(--hoverColor)
  }
`;

export default Button;
