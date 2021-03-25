/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const VARIANTS = {
  large: {
    "--width": 370 + "px",
    "--height": 24 + "px",
    "--borderRadius": 8 + "px",
    "--backgroundColor": `${COLORS.transparentGray15}`,
    "--boxShadow": `inset 0px 2px 4px ${COLORS.transparentGray35}`,
    "--padding": 4 + "px",
  },
  medium: {
    "--width": 370 + "px",
    "--height": 12 + "px",
    "--borderRadius": 8 + "px",
    "--backgroundColor": `${COLORS.transparentGray15}`,
    "--boxShadow": `inset 0px 2px 4px ${COLORS.transparentGray35}`,
    "--padding": 0,
  },
  small: {
    "--width": 370 + "px",
    "--height": 8 + "px",
    "--borderRadius": 8 + "px",
    "--backgroundColor": `${COLORS.transparentGray15}`,
    "--boxShadow": `inset 0px 2px 4px ${COLORS.transparentGray35}`,
    "--padding": 0,
  },
};

const ProgressBar = ({ value, size }) => {
  const statusBarRadius = value > 90 ? 8 : 0;

  return (
    <ProgressBarWrapper
      style={VARIANTS[size]}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value} %</VisuallyHidden>
      <StatusBar
        style={{
          ...VARIANTS[size],
          "--width": `${value}%`,
          "--primary": `${COLORS.primary}`,
          "--rightRadius": `${statusBarRadius}px`,
        }}
      />
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  background-color: var(--backgroundColor);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  height: var(--height);
  width: var(--width);
  padding: var(--padding);
`;

const StatusBar = styled.div`
  background-color: var(--primary);
  border-radius: var(--borderRadius);
  width: var(--width);
  height: 100%;
  border-top-right-radius: var(--rightRadius);
  border-bottom-right-radius: var(--rightRadius);
`;

export default ProgressBar;
