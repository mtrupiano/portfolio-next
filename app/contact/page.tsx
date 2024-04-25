"use client"

import {
  Grid,
  List,
  ListItem,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import EmailForm from "./EmailForm";

const listContainerStyle = {
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
};

export default function Contact() {
  return (
    <Grid 
      container
      sx={{
        px: {
          xs: 0,
          md: 4,
        },
      }}
      columnSpacing={{
        sm: 2,
        md: 4,
        lg: 8,
      }}
      rowSpacing={{ xs: 4 }}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" paddingBottom="10px">
          Reach out to me with a message:
        </Typography>
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        >
          <EmailForm />
        </GoogleReCaptchaProvider>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant="h5" paddingBottom="10px">
          ...or check me out here!
        </Typography>
        <List sx={listContainerStyle} disablePadding>
          <ListItem sx={{ justifyContent: "center" }}>
            <Link 
              href="https://www.github.com/mtrupiano" 
              target="_blank" 
              rel="noreferrer noopener"
            >
              GitHub
            </Link>
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ justifyContent: "center" }}>
            <Link
              href="https://www.linkedin.com/in/mark-trupiano/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </Link>
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ justifyContent: "center" }}>
            <Link href="mailto:mtrupiano2@gmail.com">
              mtrupiano2@gmail.com
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};