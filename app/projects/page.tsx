import Image from "next/image";
import {
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";

import projectContents from "./projectContents";

export default function Projects() {
  return (
    <Container>
      <List>
        {projectContents.map(project => (
          <ListItem key={`project-${project.projectName}`}>
            <Grid 
              container
              spacing={2}
            >
              <Grid item alignSelf="center">
                <a 
                  href={project.gitHub}
                  target="_blank" 
                  rel="noopener"
                >
                  <Image
                    src={project.imageSrc}
                    width={100}
                    height={100}
                  />
                </a>
              </Grid>

              <Grid item>
                <Stack>
                  <Typography variant="h4">
                    {project.projectName}
                  </Typography>
                  <Typography variant="body1">
                    {project.description}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item alignSelf="center">
                <Stack>
                  <Button
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener"
                  >
                    <GitHub />GitHub
                  </Button>
                  <Button
                    href={project.deployed}
                    target="_blank"
                    rel="noopener"
                  >
                    <OpenInNew />Deployed
                  </Button>
                </Stack>
              </Grid>

            </Grid>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};