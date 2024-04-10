"use client"

import {
  createTheme,
  ThemeProvider,
  Container,
} from "@mui/material";

import ExternalLinks from "./components/ExternalLinks";
import Header from "./components/Header";
import style from "./page.module.css";
import muiTheme from "./muiTheme";

export default function Client({children}) {
  return (
    <ThemeProvider theme={muiTheme}>
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