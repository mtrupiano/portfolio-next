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
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";

interface FormValues {
  from_name: string,
  reply_to: string,
  message: string,
}

export default function EmailForm() {

  const [sending, setSending] = useState(false);
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const validate = (values: FormValues) => {
    const errors: any = {};
    if (!values.from_name.trim()) errors.from_name = "Required";
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
    onSubmit: async (values: FormValues) => {

      if (!executeRecaptcha) {
        setErrorSnackbar(true);
        return;
      }

      setSending(true);

      const recaptchaToken = await executeRecaptcha("messageSubmit");

      const res = await axios({
        method: "post",
        url: "/api/recaptcha",
        data: {
          recaptchaToken,
        },
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });

      if (res?.data?.success === false) {
        setErrorSnackbar(true);
        setSending(false);
        return;
      }

      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: values.from_name,
          reply_to: values.reply_to,
          message: values.message,
        },
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    formik.handleSubmit(event);
  };

  return (
    <>
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
    </>
  );
}