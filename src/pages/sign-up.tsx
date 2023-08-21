import RootLayout from "@/app/layout";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
  AlertColor,
} from "@mui/material";
import { Formik, Form } from "formik";
import React, { useRef, useEffect, useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { string, object, ref } from "yup";
import SnackbarComponent from "@/components/snackbars/Snackbar";
import { useRouter } from "next/router";
import {
  BlackEmailField,
  BlackField,
  BlackPasswordField,
  BlackRequiredField,
} from "./questionnaire/[destUrl]";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useDispatch } from "react-redux";
import { signUp, updateState } from "@/store/slices/userSlice";

const SignUp = () => {
  const router = useRouter();
  return (
    <RootLayout>
      <Container sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h6" mb={5}>
          {` Sign Up and let's take you to your dream land`}
        </Typography>
        <SignUpForm />
      </Container>
    </RootLayout>
  );
};

export default SignUp;

export type signUpDetails = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  userName: string;
};

function SignUpForm() {
  const { user, successful, response } = useSelector(
    (state: RootState) => state.users
  );

  const [msg, setMsg] = useState("");
  const [color, setColor] = useState<AlertColor>("error");
  //declare refs
  const snackBarRef = useRef();

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (response) {
      if (successful) {
        setMsg(response);
        setColor("success");
        const refState = snackBarRef.current as any;
        refState.handleClick();
        dispatch(updateState());
        if (user._id) {
          setTimeout(() => {
            router.push("/dashboard");
          }, 3000);
        }
      } else {
        setMsg(response);
        setColor("error");
        const refState = snackBarRef.current as any;
        refState.handleClick();
        dispatch(updateState());
      }
    }
  }, [user, router, successful, response, dispatch]);

  const schema = object().shape({
    fullName: string().required("Your full name is required"),
    email: string().email("Invalid Email").required("Email is required"),
    phone: string().required("Your Phone Number is required"),
    password: string().required("Your Password is required"),
    confirmPassword: string()
      .oneOf([ref("password"), ""], "Both passwords must match")
      .required("Confirm password is required"),
  });

  //sign up submit handler
  const submitHandler = async (values: signUpDetails) => {
    await dispatch(signUp(values));
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
    userName: "",
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
        {({ isSubmitting, isValid, isValidating }) => (
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
              <BlackField
                label="User Name"
                name="userName"
                helperText="This will serve as your referral code"
              />
              <BlackPasswordField
                label="Password"
                helperText="Please enter your password"
                name="password"
              />
              <BlackPasswordField
                label="Confirm Password"
                helperText="Please confirm your password"
                name="confirmPassword"
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
