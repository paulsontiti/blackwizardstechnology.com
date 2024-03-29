"use client";
import { store } from "@/store";
import { ThemeProvider, createTheme } from "@mui/material";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

//custom theme
declare module "@mui/material/styles" {
  interface Theme {
    bwt: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
      1100: string;
      1200: string;
      1300: string;
      1400: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    bwt: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      1000: string;
      1100: string;
      1200: string;
      1300: string;
      1400: string;
    };
  }
  interface PaletteColor {
    light: string;
    main: string;
    dark: string;
  }
  interface PaletteOptions {}
}
const bwtColors = {
  100: "#ff8597",
  200: "#ffebee",
  300: "#ff3352",
  400: "#ff8585",
  500: "#B80000",
  600: "#CC0000",
  700: "#D10000",
  800: "#F50000",
  900: "#660000",
  1000: "#520000",
  1100: "#3D0000",
  1200: "#290000",
  1300: "#140000",
  1400: "#000",
};

export const theme = createTheme({
  bwt: bwtColors,
  palette: {
    primary: {
      main: bwtColors[1400],
      light: bwtColors[100],
      dark: bwtColors[1200],
    },
    secondary: {
      main: bwtColors[500],
      light: bwtColors[100],
      dark: bwtColors[500],
    },
    info: {
      main: bwtColors[500],
    },
  },
});

export default function BWTThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
}
