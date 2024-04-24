import {
  GitHub,
  LinkedIn,
  ContactPage,
} from "@mui/icons-material";
import { Grid, Stack } from "@mui/material";

export default function ExternalLinks() {
  return (
    <Stack 
      direction="row" 
      spacing={3}
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
      <a 
        href="https://www.linkedin.com/in/mark-trupiano" 
        rel="noreferrer noopener" 
        target="_blank"
        aria-label="Go to Mark Trupiano's LinkedIn profile"
      >
        <LinkedIn color="primary" />
      </a>
      <a 
        href="https://www.github.com/mtrupiano" 
        rel="noreferrer noopener" 
        target="_blank"
        aria-label="Go to Mark Trupiano's GitHub profile"
      >
        <GitHub color="primary" />
      </a>
    </Stack>
  );
};