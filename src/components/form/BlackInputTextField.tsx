"use client";
import { BlackInputTextFieldProps } from "@/lib/types/forms";
import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function BlackInputTextField({
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
        sx={{ bgcolor: "white" }}
        label={label}
        fullWidth
        variant="filled"
        error={error}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
        helperText={errorMessage ? errorMessage : helperText}
        onBlur={onBlur}
      />
    </Box>
  );
}
