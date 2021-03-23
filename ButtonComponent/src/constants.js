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
    "--fontSize": 16 + "px",
  },
  medium: {
    "--width": 117 + "px",
    "--height": 53 + "px",
    "--paddingY": 16 + "px",
    "--paddingX": 24 + "px",
    "--fontSize": 21 + "px",
  },
  large: {
    "--width": 152 + "px",
    "--height": 65 + "px",
    "--paddingY": 20 + "px",
    "--paddingX": 36 + "px",
    "--fontSize": 25 + "px",
  },
};

export const VARIANTS = {
  fill: {
    base: {
      "--baseBgColor": COLORS.primary,
      "--baseBorder": `2px solid ${COLORS.primary}`,
    },
    focus: {
      "--focusBgColor": COLORS.primary,
      "--focusBorder": `2px solid ${COLORS.primary}`,
      "--focusOutline": `2px solid red`,
    },
    hover: {
      "--hoverBgColor": COLORS.primaryLight,
      "--hoverBorder": `2px solid ${COLORS.primary}`,
    },
  },
  outline: {
    base: {
      "--baseBgColor": COLORS.white,
      "--baseBorder": `2px solid ${COLORS.primary}`,
    },
    focus: {
      "--focusBgColor": COLORS.white,
      "--focusBorder": `2px solid ${COLORS.primary}`,
      "--focusOutline": `2px solid red`,
    },
    hover: {
      "--hoverBgColor": COLORS.offwhite,
      "--hoverBorder": `2px solid ${COLORS.primary}`,
    }
  },
  ghost: {
    base: {
      "--baseBgColor": 'transparent',
      "--baseBorder": 'none',
    },
    focus: {
      "--focusBgColor": COLORS.white,
      "--focusBorder": `2px solid ${COLORS.primary}`,
      "--focusOutline": `2px solid red`,
    },
    hover: {
      "--hoverBgColor": COLORS.offwhite,
      "--hoverBorder": `2px solid ${COLORS.primary}`,
    }
  }
};
