"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid, Button, Stack, Link as MuiLink } from "@mui/material";
import Wordmark from "./Wordmark";
import style from "../../page.module.css"

export default function Header() {
  const pathname = usePathname();
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Wordmark />
      </Grid>

      <Grid item>
        <Stack direction="row" spacing={4} alignItems="center">
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
          >
            Resumé
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};