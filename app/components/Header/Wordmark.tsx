import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import styles from "./header.module.css"

export default function Wordmark() {
  return (
    <Stack direction="row">
      <Image 
        src=""
      />
      <Typography className={styles["trirong"]} variant="h2">
        Mark S. Trupiano
      </Typography>
    </Stack>
  ); 
}