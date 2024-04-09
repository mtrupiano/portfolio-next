"use client"

import {
  createTheme,
  ThemeProvider,
  Container,
} from "@mui/material";

import ExternalLinks from "./components/ExternalLinks";
import Header from "./components/Header";
import style from "./page.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5013af",
      light: "#9f6fd7",
      dark: "#3b00a4",
      contrastText: "#fff",
    },
    secondary: {
      main: "#b5bb49",
      light: "#e7fb8d",
      dark: "#99943a",
      contrastText: "#000"
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default function Client({children}) {
  return (
    <ThemeProvider theme={theme}>
      <main className={style.main}>
        <Container>
          <Header />
          {children}
          <ExternalLinks />
        </Container>
      </main>
    </ThemeProvider>
  );
};