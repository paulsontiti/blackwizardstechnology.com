"use client";

import SnackbarComponent from "@/components/snackbar/SnackBar";
import {
  Card,
  Typography,
  Container,
  AlertColor,
  CardActions,
  Button,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { BlackAutocomplete } from "../form/BlackAutocomplete";
import { Register } from "@/lib/classes/register";
import BlackInputTextField from "../form/BlackInputTextField";
import BlackPasswordField from "../form/BlackPasswordField";
import { Option } from "@/lib/types/forms";
import { ApiReturnValue } from "@/lib/types/returnValues";
import CircularProgress from "@mui/material/CircularProgress";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { updateUser } from "@/store/slices/userSlice";
import Link from "next/link";

export default function RegisterComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  //register values
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  //error messages
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");

  //for checking if a field has been touched
  const [isUserNameTouched, setIsUserNameTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] =
    useState(false);
  //for snackbar
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState<AlertColor>("error");
  //state for loadingButton
  const [loading, setLoading] = useState(false);

  //register object
  let register = new Register();

  //snackbar ref
  const snackBarRef = useRef();

  //register handler
  const registerHandler = async () => {
    setLoading(true);
    //clear error before proceeding
    register.clearError();
    //update register object
    register.userName = userName;
    register.password = password;
    register.confirmPassword = confirmPassword;
    register.referralCode = referralCode;
    if (register.isError() || register.errors.length > 0) {
      setLoading(false);
      setMsg("Please provide the required details");
      setColor("error");
      const refState = snackBarRef.current as any;
      refState.handleClick();
      return;
    }

    const url = `${process.env.BWT_URL}api/register`;

    const body = {
      userName: register.userName,
      password: register.password,
      referralCode: register.referralCode,
    };
    //send data to backend to register user
    const response: ApiReturnValue = await register.sendData(url, body);
    setLoading(false);
    if (response.ok) {
      setMsg(
        "Your registeration was successful. Welcome to Black Wiards Technology"
      );
      setColor("success");
      const refState = snackBarRef.current as any;
      refState.handleClick();
      dispatch(updateUser(response.value));
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    } else {
      setMsg(response.error);
      setColor("error");
      const refState = snackBarRef.current as any;
      refState.handleClick();
    }
  };

  return (
    <Container
      sx={{
        mt: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
          minWidth: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
          p: 1,
        }}
      >
        <Typography variant="h6" fontSize={32}>
          Join our community
        </Typography>

        <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
        <BlackInputTextField
          label="Username"
          helperText="What would you want the Black Wizards community to call you?"
          errorMessage={userNameErrorMessage}
          onChange={(value: string) => {
            setUserName(value);
          }}
          onBlur={() => {
            setIsUserNameTouched(true);
            register.clearError();
            register.validateUserName(userName);
            setUserNameErrorMessage(
              register.errors.find((err) => err.fieldName === "userName")
                ?.errorMessage as string
            );
          }}
        />
        <BlackPasswordField
          label="Password"
          helperText="Please enter a password of at least 8 characters which contains a capital letter,a digit and alphanumeric character"
          errorMessage={passwordErrorMessage}
          onChange={(value: string) => {
            setPassword(value);
          }}
          onBlur={() => {
            setIsPasswordTouched(true);
            register.clearError();
            register.validatePassword(password);
            setPasswordErrorMessage(
              register.errors.find((err) => err.fieldName === "password")
                ?.errorMessage as string
            );
          }}
        />
        <BlackPasswordField
          label="Confirm Password"
          helperText="Ensure this matches with your password"
          errorMessage={confirmPasswordErrorMessage}
          onChange={(value: string) => {
            setConfirmPassword(value);
          }}
          onBlur={() => {
            setIsConfirmPasswordTouched(true);
            register.clearError();
            register.doesPasswordsMatch(confirmPassword, password);
            setConfirmPasswordErrorMessage(
              register.errors.find((err) => err.fieldName === "confirmPassword")
                ?.errorMessage as string
            );
          }}
        />
        <BlackAutocomplete
          options={register.referralOptions}
          label="Type to search for usernames and social media handles"
          placeholder=""
          helperText="How did you know about us?"
          onChange={(value: Option | null) => {
            if (value) {
              setReferralCode(value.label);
            } else {
              setReferralCode("");
            }
          }}
        />
        <CardActions>
          <LoadingButton
            loading={loading}
            loadingIndicator={<CircularProgress color="success" />}
            variant="contained"
            onClick={registerHandler}
          >
            Register
          </LoadingButton>
        </CardActions>
        <Typography mt={2}>
          <Link href={"/login"}>Login</Link> if you already have an account
        </Typography>
      </Card>
    </Container>
  );
}
