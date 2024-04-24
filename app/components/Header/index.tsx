"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid, Button, Stack } from "@mui/material";
import Wordmark from "./Wordmark";
import style from "./header.module.css";

export default function Header() {
  const pathname = usePathname();
  return (
    <Grid 
      container
      justifyContent="space-between" 
      alignItems="center"
      rowSpacing={1}
      sx={{
        px: {
          xs: 2,
          sm: 4,
          lg: 6,
          xl: 12,
        },
        py: 6,
      }}
    >
      <Grid item xs={12} sm={12} md="auto">
        <Wordmark />
      </Grid>

      <Grid item xs={12} sm={12} md="auto">
        <Stack 
          direction="row"
          spacing={{
            xs: 2,
            sm: 4,
          }}
          alignItems="center"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Link 
            href="/projects" 
            className={pathname === "/projects" ? style["text-anchor-selected"] : style["text-anchor"]}
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className={pathname === "/contact" ? style["text-anchor-selected"] : style["text-anchor"]}
          >
            Contact
          </Link>
          <Button 
            variant="contained" 
            href="/trupiano_resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            disableElevation={true}
          >
            Resumé
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};