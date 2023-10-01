"use client";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
export function BlackFormikPasswordField({
  name,
  label,
  required,
}: TextFieldProps) {
  const [hidePassword, setHidePassword] = useState(true);
  const [inputType, setInputType] = useState("password");
  const handleClickShowPassword = () => {
    setHidePassword((hidePassword) => !hidePassword);

    hidePassword ? setInputType("text") : setInputType("password");
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box mb={2}>
      <Field
        name={name}
        as={TextField}
        label={label}
        sx={{ width: "100%" }}
        type={inputType}
        required={required}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {hidePassword ? <VisibilityIcon /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box color={"red"}>
        <ErrorMessage name={name} />
      </Box>
    </Box>
  );
}
type TextFieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  multiline?: boolean;
  rows?: number;
};
