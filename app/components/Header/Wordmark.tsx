import { Stack, Typography } from "@mui/material";
import styles from "./header.module.css"

export default function Wordmark() {
  return (
    <Stack direction="row" justifyContent={{ xs: "center", md: "flex-start" }}>
      <a href="/">
        <Typography 
          className={styles["trirong"]} 
          variant="h1"
          sx={{
            fontSize: {
              xs: 36,
              sm: 64,
            },
          }}
        >
          Mark S. Trupiano
        </Typography>
      </a>
    </Stack>
  ); 
}