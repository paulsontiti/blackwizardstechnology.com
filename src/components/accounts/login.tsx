"use client";

import SnackbarComponent from "@/components/snackbar/SnackBar";
import {
  Card,
  Typography,
  Container,
  AlertColor,
  CardActions,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { BlackAutocomplete } from "../form/BlackAutocomplete";
import BlackInputTextField from "../form/BlackInputTextField";
import BlackPasswordField from "../form/BlackPasswordField";
import { Option } from "@/lib/types/forms";
import { ApiReturnValue } from "@/lib/types/returnValues";
import { LoadingButton } from "@mui/lab";
import { Login } from "@/lib/classes/login";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { updateUser } from "@/store/slices/userSlice";

export default function LoginComponent() {
  //app dispatch
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  //register values
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //error messages
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  //for checking if a field has been touched
  const [isUserNameTouched, setIsUserNameTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  //for snackbar
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState<AlertColor>("error");
  //state for loadingButton
  const [loading, setLoading] = useState(false);

  //register object
  let login = new Login();

  //snackbar ref
  const snackBarRef = useRef();

  //register handler
  const registerHandler = async () => {
    setLoading(true);
    //clear error before proceeding
    login.clearError();
    //update register object
    login.userName = userName;
    login.password = password;
    if (login.isError() || login.errors.length > 0) {
      setLoading(false);
      setMsg("Please provide the required details");
      setColor("error");
      const refState = snackBarRef.current as any;
      refState.handleClick();
      return;
    }

    const url = `${process.env.BWT_URL}api/login`;

    const body = {
      userName: login.userName,
      password: login.password,
    };
    //send data to backend to register user
    const response: ApiReturnValue = await login.sendData(url, body);
    setLoading(false);
    if (response.ok) {
      dispatch(updateUser(response.value));
      setMsg("Login was successful. Welcome to Black Wiards Technology");
      setColor("success");
      const refState = snackBarRef.current as any;
      refState.handleClick();
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
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
        mt: 20,
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
          Signin
        </Typography>

        <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
        <BlackInputTextField
          label="Username"
          errorMessage={userNameErrorMessage}
          onChange={(value: string) => {
            setUserName(value);
          }}
          onBlur={() => {
            setIsUserNameTouched(true);
            login.clearError();
            login.validateUserName(userName);
            setUserNameErrorMessage(
              login.errors.find((err) => err.fieldName === "userName")
                ?.errorMessage as string
            );
          }}
        />
        <BlackPasswordField
          label="Password"
          errorMessage={passwordErrorMessage}
          onChange={(value: string) => {
            setPassword(value);
          }}
          onBlur={() => {
            setIsPasswordTouched(true);
            login.clearError();
            login.validatePassword(password);
            setPasswordErrorMessage(
              login.errors.find((err) => err.fieldName === "password")
                ?.errorMessage as string
            );
          }}
        />

        <CardActions>
          <LoadingButton
            loading={loading}
            loadingIndicator={<CircularProgress color="success" />}
            variant="contained"
            onClick={registerHandler}
          >
            Login
          </LoadingButton>

          <Button variant="outlined">Reset</Button>
        </CardActions>
      </Card>
    </Container>
  );
}