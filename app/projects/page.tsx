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
      <List sx={{ py: 2 }}>
        {projectContents.map(project => (
          <ListItem key={`project-${project.projectName}`}>
            <Grid 
              container
              spacing={3}
            >
              <Grid item sm="auto" xs={12} alignSelf="center" justifyContent="center">
                <a
                  href={project.gitHub}
                  target="_blank" 
                  rel="noopener"
                >
                  <Image
                    src={project.imageSrc}
                    width={175}
                    height={175}
                    style={{ borderRadius: "8px" }}
                  />
                </a>
              </Grid>

              <Grid item sm={7} xs={12}>
                <Stack>
                  <Typography variant="h4">
                    {project.projectName}
                  </Typography>
                  <Typography variant="body1">
                    {project.description}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item sm="auto" xs={12} alignSelf="center">
                <Stack spacing={1}>
                  <Button
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener"
                    sx={{ fontSize: 20 }}
                  >
                    <GitHub sx={{ marginRight: 1, fontSize: 28 }} />
                    GitHub
                  </Button>
                  {Boolean(project.deployed) && (
                    <Button
                      href={project.deployed}
                      target="_blank"
                      rel="noopener"
                      sx={{ fontSize: 20 }}
                    >
                      <OpenInNew sx={{ marginRight: 1, fontSize: 28 }} />
                      Deployed
                    </Button>
                  )}
                </Stack>
              </Grid>

            </Grid>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};