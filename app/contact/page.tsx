"use client"

import { useState } from "react";
import {
  Grid,
  Stack,
  TextField,
  Button,
  Snackbar,
  Alert,
  List,
  ListItem,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

const listContainerStyle = {
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
};

export default function Contact() {

  const [sending, setSending] = useState(false);
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.from_name.trim()) errors.name = "Required";
    if (!values.reply_to) {
      errors.reply_to = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.reply_to)) {
      errors.reply_to = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      from_name: "",
      reply_to: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      setSending(true);
      
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        values,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      ).then(
        () => {
          setSuccessSnackbar(true);
          setSending(false);
        }, 
        (error) => {
          setErrorSnackbar(true);
          setSending(false);
        }
      )
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit(event);
  };

  return (
    <Grid 
      container
      sx={{
        px: {
          xs: 0,
          md: 4,
        },
        py: 4,
      }}
      columnSpacing={{
        sm: 2,
        md: 4,
        lg: 8,
      }}
      rowSpacing={{ xs: 4 }}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" paddingBottom="10px">
          Reach out to me with a message:
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField 
              id="from_name"
              name="from_name"
              label="Name"
              value={formik.values.from_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.from_name && formik.errors.from_name}
              error={formik.touched.from_name && !!formik.errors.from_name}
              size="small"
            />
            <TextField
              id="reply_to"
              name="reply_to"
              label="E-mail"
              value={formik.values.reply_to}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.reply_to && formik.errors.reply_to}
              error={formik.touched.reply_to && !!formik.errors.reply_to}
              size="small"
            />
            <TextField 
              id="message"
              name="message"
              label="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              multiline={true}
              rows={5}
            />
            <Button variant="contained" type="submit" disabled={sending}>
              Send
            </Button>
          </Stack>
        </form>

      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant="h5" paddingBottom="10px">
          ...or check me out here!
        </Typography>
        <List sx={listContainerStyle} disablePadding>
          <ListItem sx={{ justifyContent: "center" }}>
            <Link 
              href="https://www.github.com/mtrupiano" 
              target="_blank" 
              rel="noreferrer noopener"
            >
              GitHub
            </Link>
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ justifyContent: "center" }}>
            <Link
              href="https://www.linkedin.com/in/mark-trupiano/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </Link>
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ justifyContent: "center" }}>
            <Link href="mailto:mtrupiano2@gmail.com">
              mtrupiano2@gmail.com
            </Link>
          </ListItem>
        </List>
      </Grid>

      <Snackbar
        open={successSnackbar}
        onClose={() => setSuccessSnackbar(false)}
        message="Sent!"
        autoHideDuration={4000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert 
          severity="success" 
          variant="filled" 
          onClose={() => setSuccessSnackbar(false)}
        >
          Sent!
        </Alert>
      </Snackbar>

      <Snackbar 
        open={errorSnackbar}
        onClose={() => setErrorSnackbar(false)}
        message="There was an error sending your message..."
        autoHideDuration={4000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          severity="error"
          variant="filled"
          onClose={() => setErrorSnackbar(false)}
        >
          There was an error sending your message...
        </Alert>
      </Snackbar>

    </Grid>
  );
};