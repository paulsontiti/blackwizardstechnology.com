import RootLayout from "@/app/layout";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
  TextField,
  AlertColor,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import React, { useRef, useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { string, object } from "yup";
import axios from "axios";
import SnackbarComponent from "@/components/snackbars/Snackbar";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const course = router.query.course as string;
  return (
    <RootLayout>
      <Container sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h6" mb={5}>
          {` Sign Up and let's take you to your dream land`}
        </Typography>
        <SignUpForm course={course} />
      </Container>
    </RootLayout>
  );
};

export default SignUp;

type signUpDetails = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  course: string;
};

function SignUpForm({ course }: { course: string }) {
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState<AlertColor>("error");
  //declare refs
  const snackBarRef = useRef();

  const router = useRouter();
  const schema = object().shape({
    fullName: string().required("Your full name is Required"),
    email: string().email("Invalid Email"),
    phone: string().required("Your Phone Number is Required"),
    password: string().required("Your Password is Required"),
  });

  const signUp = async (values: signUpDetails) => {
    values.course = course;
    if (course) {
      try {
        const res = await axios({
          method: "POST",
          url: `${process.env.BWT_URL}api/users/signup`,
          data: values,
        });
        const data = await res.data;
        if (data.successful) {
          setMsg(data.message);
          setColor("success");
          const refState = snackBarRef.current as any;
          refState.handleClick();
          setTimeout(() => {
            router.push("/");
          }, 6000);
        } else {
          setMsg(data.message);
          setColor("error");
          const refState = snackBarRef.current as any;
          refState.handleClick();
        }
      } catch (err: any) {
        console.log(err);
        setMsg(err.response.data.message);
        setColor("error");
        const refState = snackBarRef.current as any;
        refState.handleClick();
      }
    } else {
      setMsg("Please select a course");
      setColor("error");
      const refState = snackBarRef.current as any;
      refState.handleClick();
    }
  };
  //sign up submit handler
  const submitHandler = async (values: signUpDetails) => {
    await signUp(values);
  };
  //formik submit handler
  const formikSubmitHandler = (values: any, formikHelpers: any) => {
    return new Promise((res) => {
      formikHelpers
        .validateForm()
        .then(async (data: any) => {
          //if (values.emailVerificationCode === verificationCode) {
          const msg = await submitHandler(values);

          res(msg);
          // } else {
          //   setMsg("Invalid email verification code");
          //   setColor("error");
          //   const refState = snackBarRef.current as any;
          //   refState.handleClick();
          //   res("");
          //}
        })
        .catch((err: any) => {
          res(err);
        });
    });
  };
  const initiavalues: signUpDetails = {
    fullName: "",
    phone: "",
    email: "",
    password: "",
    course,
  };
  return (
    <>
      <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
      <Formik
        validationSchema={schema}
        initialValues={initiavalues}
        onSubmit={formikSubmitHandler}
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
                  disabled={isValidating || isSubmitting || !isValid}
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
    </>
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
