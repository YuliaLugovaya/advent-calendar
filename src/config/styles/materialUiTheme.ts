import { createStyles, ThemeOptions } from "@mui/material";

export const theme = () =>
  createStyles({
    breakpoints: {
      values: {
        xs: 0,
        sm: 360,
        md: 768,
        lg: 1024,
        xl: 1440,
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: "0",
            borderRadius: "6px",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "1",
            letterSpacing: 0,
            textTransform: "none",
            "&.primary": {
              backgroundColor: "#421417",
              borderColor: "#421417",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#434a38",
                borderColor: "#434a38",
              },
              "&:focus": {
                borderColor: "#434a38",
                backgroundColor: "#434a38",
              },
              "&:active": {
                borderColor: "#434a38",
                backgroundColor: "#434a38",
                color: "#FFFFFF",
              },
              "&:disabled": {
                borderColor: "#5e4a4b",
                backgroundColor: "#5e4a4b",
                color: "#FFFFFF",
              },
            },
            "&.secondary": {
              backgroundColor: "#c29463",
              borderColor: "#c29463",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#434a38",
                borderColor: "#434a38",
              },
              "&:focus": {
                borderColor: "#434a38",
                backgroundColor: "#434a38",
              },
              "&:active": {
                borderColor: "#434a38",
                backgroundColor: "#434a38",
                color: "#FFFFFF",
              },
              "&:disabled": {
                borderColor: "#5e4a4b",
                backgroundColor: "#5e4a4b",
                color: "#FFFFFF",
              },
            },
          },
        },
      },
    },
  }) as ThemeOptions;
