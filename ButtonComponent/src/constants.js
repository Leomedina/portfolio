export const COLORS = {
  primary: "hsl(240deg 100% 60%)",
  primaryLight: "hsl(235deg 100% 62%)",
  white: "hsl(0deg 0% 100%)",
  offwhite: "hsl(235deg 85% 97%)",
  gray: "hsl(240deg 10% 50%)",
  transparentGray15: "hsl(240deg 10% 50% / 0.15)",
  transparentGray75: "hsl(240deg 10% 50% / 0.75)",
  black: "hsl(0deg 0% 0%)",
};

export const SIZES = {
  small: {
    "--width": 93 + "px",
    "--height": 35 + "px",
    "--paddingY": 8 + "px",
    "--paddingX": 16 + "px",
    "--paddingTop": 4 + "px", // visual adjustments 
    "--fontSize": 16 + "px",
  },
  medium: {
    "--width": 117 + "px",
    "--height": 53 + "px",
    "--paddingY": 16 + "px",
    "--paddingX": 24 + "px",
    "--paddingTop": 12 + "px", // visual adjustments
    "--fontSize": 21 + "px",
  },
  large: {
    "--width": 152 + "px",
    "--height": 65 + "px",
    "--paddingY": 20 + "px",
    "--paddingX": 36 + "px",
    "--paddingTop": 16 + "px", // visual adjustments
    "--fontSize": 25 + "px",
  },
};

export const VARIANTS = {
  fill: {
    base: {
      "--baseBgColor": COLORS.primary,
      "--baseBorder": `2px solid ${COLORS.primary}`,
      "--baseColor": COLORS.white,
    },
    focus: {
      "--focusBgColor": COLORS.primary,
      "--focusBorder": `2px solid ${COLORS.primary}`,
      "--focusBoxShadow": `0 0 0 2px ${COLORS.primary}`, 
    },
    hover: {
      "--hoverBgColor": COLORS.primaryLight,
      "--hoverBorder": `2px solid ${COLORS.primaryLight}`,
      "--hoverColor": COLORS.white,
    },
  },
  outline: {
    base: {
      "--baseBgColor": COLORS.white,
      "--baseBorder": `2px solid ${COLORS.primary}`,
      "--baseColor": COLORS.primary,
    },
    focus: {
      "--focusBgColor": COLORS.white,
      "--focusBorder": `2px solid ${COLORS.primary}`,
      "--focusBoxShadow": `0 0 0 2px ${COLORS.primary}`,
    },
    hover: {
      "--hoverBgColor": COLORS.offwhite,
      "--hoverBorder": `2px solid ${COLORS.primary}`,
      "--hoverColor": COLORS.primary,
    }
  },
  ghost: {
    base: {
      "--baseBgColor": "transparent",
      "--baseBorder": "none",
      "--baseColor": COLORS.gray,
    },
    focus: {
      "--focusBgColor": COLORS.white,
      "--focusBorder": `2px solid ${COLORS.transparentGray75}`,
      "--focusOutline": "none",
      "--focusOutlineOffSet": 0,
    },
    hover: {
      "--hoverBgColor": COLORS.transparentGray15,
      "--hoverBorder": `2px solid ${COLORS.transparentGray75}`,
      "--hoverColor": COLORS.black,
      "--focusBoxShadow": "0",
    }
  }
};
