export const colors = {
  text: {
    primary: "#000000",
    secondary: "#FFFFFF",
  },
  color: {
    yellow: "#c29463",
    green: "#434a38",
    greenLight: "#94a975",
    turquoise: "#1e2724",
    burgundy: "#421417",
    peach: "#d99f94",
    violet: "#5e4a4b",
  },
};

declare module "@mui/material/styles" {
  interface Palette {
    color: {
      primary: string;
      yellow: string;
      green: string;
      greenLight: string;
      turquoise: string;
      burgundy: string;
      peach: string;
      violet: string;
    };
  }
  interface PaletteOptions {
    color?: {
      primary?: string;
      yellow?: string;
      green?: string;
      greenLight?: string;
      turquoise?: string;
      burgundy?: string;
      peach?: string;
      violet?: string;
    };
  }
}
