import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { theme } from "./materialUiTheme";

interface IThemeProps {
  children: JSX.Element | JSX.Element[];
}

export const Theme = ({ children }: IThemeProps) => {
  return <ThemeProvider theme={createTheme(theme())}>{children}</ThemeProvider>;
};
