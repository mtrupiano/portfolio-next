import { Grid, Button, Stack } from "@mui/material";
import Wordmark from "./Wordmark";
import Link from "next/link";

export default function Header() {
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Wordmark />
      </Grid>

      <Grid item>
        <Stack direction="row" spacing={1}>
          <Button>
            <Link href="/projects">
              Projects
            </Link>
          </Button>
          <Button href="./contact">
            Contact
          </Button>
          <Button variant="contained">
            Resumé
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};