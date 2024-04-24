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
      }}
      spacing={{
        sm: 2,
        md: 4,
        xl: 8,
      }}
    >
      <Grid item xs="auto">
        <Image 
          src="/headshot.jpg"
          alt="mark-headshot"
          height={400}
          width={400}
          className={styles["rounded-image"]}
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="h4">
          Welcome!
        </Typography>
        <Typography variant="body1">
          {`
            My name's Mark and I'm an early career web developer. 
            I live in the Seattle area and I'm currently looking for my next opportunity! 
            I have a Bachelor's degree in mechanical engineering, but I underwent a career change a little over 2 years ago. 
            I took multiple university programs to learn about computer science and modern web development. I've held two 
            positions as a web developer where I contributed to full-stack web applications, but I 
            found myself mainly gravitating towards front-end work.
          `}
        </Typography>
        <br />
        <Typography variant="body1">
          {`
            Outside of education and my career I spend my time enjoying the outdoors and enjoying the company of my family 
            and friends. I'm also an avid football-watcher (go Huskies and go Packers!), PC gamer, and concert-goer. 
            If I'm not doing one of the above activities you'll probably find me experimenting in the kitchen, 
            tinkering with one of my many tech hobbies, or working on my next software project.
          `}
        </Typography>
        <br />
        <Typography variant="body1">
          Thanks for stopping by!
        </Typography>
      </Grid>
    </Grid>
  );
}
