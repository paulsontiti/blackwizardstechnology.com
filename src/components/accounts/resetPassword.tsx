"use client";
import {
  AlertColor,
  CircularProgress,
  CardActions,
  Box,
  CardHeader,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import SnackbarComponent from "../snackbar/SnackBar";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { Form, Formik } from "formik";
import { object, ref, string } from "yup";
import { ResetPasswordType } from "@/lib/types/forms";
import { useRouter } from "next/navigation";
import { AccountError } from "@/lib/types/account";
import { BlackFormikTextField } from "../form/BlackFormikTextField";
import { BlackFormikPasswordField } from "../form/BlackFormikPasswordField";
import { Account } from "@/lib/classes/account";
import HomeAppBar from "../home/AppBar";
import Footer from "../home/Footer";

export default function ResetPasswordForm() {
  const router = useRouter();
  const [msg, setMsg] = React.useState("");
  const [color, setColor] = React.useState<AlertColor>("error");
  const [error, setError] = React.useState<AccountError[]>([]);
  //state for loadingButton
  const [loading, setLoading] = React.useState(false);
  //snackbar ref
  const snackBarRef = React.useRef();

  //yup validation schema
  const validationSchema = object({
    userName: string().required("User Name is required"),
    password: string().required("Password is required"),
    confirmPassword: string()
      .oneOf([ref("password"), ""], "Both Passwords must match")
      .required("Confirm Password is required"),
  });

  //form initial values
  const initialValues: ResetPasswordType = {
    userName: "",
    password: "",
    confirmPassword: "",
  };

  //submit handler
  const formikSubmitHandler = (
    values: ResetPasswordType,
    formikHelpers: any
  ) => {
    setLoading(true);
    return new Promise((res) => {
      formikHelpers
        .validateForm()
        .then(async (data: any) => {
          const response = await Account.resetPassword({
            userName: values.userName,
            password: values.password,
          });
          if (response.ok) {
            setMsg("Your password was successfully reset");
            setColor("success");
            const refState = snackBarRef.current as any;
            refState.handleClick();
            setLoading(false);
            setTimeout(() => {
              router.push("/dashboard");
            }, 2000);
          } else {
            setMsg(response.error);
            setColor("error");
            const refState = snackBarRef.current as any;
            refState.handleClick();
            setLoading(false);
          }
          res(data);
        })
        .catch((err: any) => {
          setMsg(err.message);
          setColor("error");
          const refState = snackBarRef.current as any;
          refState.handleClick();
          setLoading(false);
          res(err);
        });
    });
  };

  return (
    <>
      <HomeAppBar />
      <Card sx={{ mt: 10, mb: 5 }}>
        <CardHeader
          title="Reset Password"
          sx={{ color: "red", fontWeight: "bold" }}
        />
        <CardContent>
          <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={formikSubmitHandler}
            enableReinitialize
          >
            {({ isSubmitting, isValid, isValidating }) => (
              <Form>
                <Box display={"flex"} flexDirection={"column"}>
                  <BlackFormikTextField
                    name="userName"
                    label="User Name"
                    required={true}
                    placeholder="e.g John"
                  />
                  <BlackFormikPasswordField
                    name="password"
                    label="Password"
                    required={true}
                    placeholder=""
                  />
                  <BlackFormikPasswordField
                    name="confirmPassword"
                    label="Confirm Password"
                    required={true}
                    placeholder=""
                  />
                </Box>
                <CardActions>
                  <LoadingButton
                    loading={loading || isSubmitting}
                    disabled={!isValid || isSubmitting || isValidating}
                    type="submit"
                    loadingIndicator={<CircularProgress color="success" />}
                    variant="contained"
                    fullWidth
                    onClick={() => {}}
                  >
                    Reset password
                  </LoadingButton>
                </CardActions>

                {/* <pre>{JSON.stringify(values, null, 4)}</pre>
              <pre>{JSON.stringify(errors, null, 4)}</pre> */}
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>{" "}
      <Footer />
    </>
  );
}
