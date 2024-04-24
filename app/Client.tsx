"use client"

import {
  createTheme,
  ThemeProvider,
  Container,
} from "@mui/material";

import ExternalLinks from "./components/ExternalLinks";
import Header from "./components/Header";
import muiTheme from "./muiTheme";

export default function Client({children}) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Header />
      <Container
        sx={{
          px: {
            xs: 2,
            sm: 4,
            md: 6,
            lg: 8,
          },
          paddingBottom: 4,
        }}
      >
        {children}
      </Container>
      <ExternalLinks />
    </ThemeProvider>
  );
};