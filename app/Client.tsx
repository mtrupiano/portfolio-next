"use client"

import {
  createTheme,
  ThemeProvider,
  Container,
} from "@mui/material";

import ExternalLinks from "./components/ExternalLinks";
import Header from "./components/Header";

const theme = createTheme({
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
      <Container>
        <Header />
        {children}
        <ExternalLinks />
      </Container>
    </ThemeProvider>
  );
};