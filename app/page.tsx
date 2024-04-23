import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Grid 
      container 
      justifyContent="center" 
      sx={{
        px: {
          xs: 0,
          md: 4,
        },
        py: 8,
      }}
      spacing={4}
    >
      <Grid item>
        <Image 
          src="/headshot.jpg"
          alt="mark-headshot"
          height={400}
          width={400}
          className={styles["rounded-image"]}
        />
      </Grid>
      <Grid item>
        <Typography variant="h4">
          Hello!
        </Typography>
        <Typography variant="body1">
          I am an early career full stack web developer.
        </Typography>
      </Grid>
    </Grid>
  );
}
