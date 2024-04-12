"use client"

import {
  Grid,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { useFormik } from "formik";

export default function Contact() {
  const validate = (values) => {
    const errors = {};
    if (!values.name.trim()) errors.name = "Required";
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit(event);
  };

  return (
    <Grid container>
      <Grid item>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField 
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.name && formik.errors.name}
              error={formik.touched.name && !!formik.errors.name}
              size="small"
            />
            <TextField
              id="email"
              name="email"
              label="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.email && formik.errors.email}
              error={formik.touched.email && !!formik.errors.email}
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
            <Button variant="contained" type="submit">
              Send
            </Button>
          </Stack>
        </form>

      </Grid>
      <Grid item>

      </Grid>
    </Grid>
  );
};