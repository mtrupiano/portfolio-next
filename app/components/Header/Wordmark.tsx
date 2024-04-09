import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { Forum } from "next/font/google";

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum"
});

export default function Wordmark() {
  return (
    <Stack direction="row">
      <Image 
        src=""
      />
      <Typography className={forum.className} variant="h2">
        Mark S. Trupiano
      </Typography>
    </Stack>
  ); 
}