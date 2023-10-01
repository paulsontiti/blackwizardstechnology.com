"use client";
import { BlackInputTextFieldProps } from "@/lib/types/forms";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export default function BlackPasswordField({
  label,
  onChange,
  onBlur,
  errorMessage,
  helperText,
}: BlackInputTextFieldProps) {
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(errorMessage ? true : false);
  }, [errorMessage]);
  const [hidePassword, setHidePassword] = useState(true);
  const [inputType, setInputType] = useState("password");
  const handleClickShowPassword = () => {
    setHidePassword((hide) => !hide);

    hidePassword ? setInputType("text") : setInputType("password");
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box mb={2}>
      <TextField
        type={inputType}
        fullWidth
        label={label}
        error={error}
        variant="filled"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
        onBlur={onBlur}
        helperText={errorMessage ? errorMessage : helperText}
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
    </Box>
  );
}
