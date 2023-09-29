"use client";
import { BlackInputTextFieldProps } from "@/lib/types/forms";
import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
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

  return (
    <Box mb={2}>
      <TextField
        type="password"
        fullWidth
        label={label}
        error={error}
        variant="filled"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
        onBlur={onBlur}
        helperText={errorMessage ? errorMessage : helperText}
      />
    </Box>
  );
}
