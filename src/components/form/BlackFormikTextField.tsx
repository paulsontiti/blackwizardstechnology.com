import { Box, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";

export function BlackFormikTextField({
  name,
  label,
  type,
  required,
  placeholder,
  multiline,
  rows,
}: TextFieldProps) {
  return (
    <Box mb={2}>
      <Field
        name={name}
        as={TextField}
        label={label}
        sx={{ width: "100%" }}
        type={type ?? "input"}
        required={required}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
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
