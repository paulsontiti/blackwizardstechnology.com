import RootLayout from "@/app/layout";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import React from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { string, object } from "yup";

const SignUp = () => {
  return (
    <RootLayout>
      <Container sx={{ mt: 20, mb: 10 }}>
        <Typography variant="h6" mb={5}>
          {` Sign Up and let's take you to your dream land`}
        </Typography>
        <Questionnaire />
      </Container>
    </RootLayout>
  );
};

export default SignUp;

function Questionnaire() {
  const schema = object().shape({
    fullName: string().required("Your full name is Required"),
    email: string().email("Invalid Email"),
    phone: string().required("Your Phone Number is Required"),
    password: string().required("Your Password is Required"),
  });
  return (
    <Formik
      validationSchema={schema}
      initialValues={{ fullName: "", phone: "", email: "", password: "" }}
      onSubmit={() => {}}
      enableReinitialize
    >
      {({ values, touched, isSubmitting, isValid, isValidating, errors }) => (
        <Form>
          <Box
            mt={"1rem"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <BlackRequiredField
              helperText="Please give us your names in full"
              name="fullName"
              label="Full Name"
            />

            <BlackEmailField
              label="Email"
              helperText="Please enter a valid email address"
              name="email"
            />
            <BlackRequiredField
              label="Phone Number"
              name="phone"
              helperText="Your Whatsapp Number is preferrable"
            />
            <BlackPasswordField
              label="Password"
              helperText="Please enter your password"
              name="password"
            />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              mt={3}
              width={{ xs: "100%", md: "50%" }}
            >
              <Button
                type="submit"
                variant="contained"
                disabled={isValidating || isSubmitting}
                size="small"
              >
                Submit
              </Button>
              <Button
                type="reset"
                variant="outlined"
                size="small"
                startIcon={<RestartAltIcon />}
              >
                Reset
              </Button>
            </Box>
          </Box>

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isSubmitting}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Form>
      )}
    </Formik>
  );
}
function BlackRequiredField({
  helperText,
  label,
  name,
}: {
  helperText: string;
  label: string;
  name: string;
}) {
  return (
    <Field
      as={TextField}
      label={label}
      helperText={helperText}
      variant="standard"
      required
      sx={{ minWidth: 300, maxWidth: 350, mb: 2, mr: 3 }}
      InputLabelProps={{ shrink: true }}
      name={name}
    />
  );
}
function BlackPasswordField({
  helperText,
  label,
  name,
}: {
  helperText: string;
  label: string;
  name: string;
}) {
  return (
    <Field
      as={TextField}
      label={label}
      helperText={helperText}
      variant="standard"
      type="password"
      required
      sx={{ minWidth: 300, maxWidth: 350, mb: 2, mr: 3 }}
      InputLabelProps={{ shrink: true }}
      name={name}
    />
  );
}
function BlackEmailField({
  helperText,
  label,
  name,
}: {
  helperText: string;
  label: string;
  name: string;
}) {
  return (
    <Field
      as={TextField}
      label={label}
      helperText={helperText}
      variant="standard"
      type="email"
      required
      sx={{ minWidth: 300, maxWidth: 350, mb: 2, mr: 3 }}
      InputLabelProps={{ shrink: true }}
      name={name}
    />
  );
}
function BlackRadioButton({ label, name }: { label: string; name: string }) {
  return (
    <label style={{ marginBottom: "1rem" }}>
      <Field type="radio" name={name} value={label} />
      {label}
    </label>
  );
}
