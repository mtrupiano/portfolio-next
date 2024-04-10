import { createTheme } from "@mui/material";

export default createTheme({
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