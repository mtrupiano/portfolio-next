import {
  GitHub,
  LinkedIn,
  ContactPage,
} from "@mui/icons-material";
import { Grid, Stack } from "@mui/material";

export default function ExternalLinks() {
  return (
    <Stack direction="row" spacing={3} paddingTop={10}>
      <a 
        href="https://www.linkedin.com/in/mark-trupiano" 
        rel="noreferrer noopener" 
        target="_blank"
        aria-label="Go to Mark Trupiano's LinkedIn profile"
      >
        <LinkedIn />
      </a>
      <a 
        href="https://www.github.com/mtrupiano" 
        rel="noreferrer noopener" 
        target="_blank"
        aria-label="Go to Mark Trupiano's GitHub profile"
      >
        <GitHub />
      </a>
    </Stack>
  );
};