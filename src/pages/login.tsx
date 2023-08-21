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
import { login, signUp, updateState } from "@/store/slices/userSlice";

const Login = () => {
  const router = useRouter();
  return (
    <RootLayout>
      <Container sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h6" mb={5}>
          {` Sign In To Your Account`}
        </Typography>
        <LoginForm />
      </Container>
    </RootLayout>
  );
};

export default Login;

export type LoginDetails = {
  email: string;
  password: string;
};

function LoginForm() {
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
    email: string().email("Invalid Email").required("Email is required"),
    password: string().required("Your Password is required"),
  });

  //sign up submit handler
  const submitHandler = async (values: LoginDetails) => {
    await dispatch(login(values));
  };
  //formik submit handler
  const formikSubmitHandler = (values: any, formikHelpers: any) => {
    return new Promise((res) => {
      formikHelpers
        .validateForm()
        .then(async (data: any) => {
          const msg = await submitHandler(values);

          res(msg);
        })
        .catch((err: any) => {
          res(err);
        });
    });
  };
  const initiavalues: LoginDetails = {
    email: "",
    password: "",
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
              <BlackEmailField
                label="Email"
                helperText="Please enter a valid email address"
                name="email"
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
                  Login
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
