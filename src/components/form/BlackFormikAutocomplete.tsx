import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Field, useFormikContext } from "formik";
import { Box } from "@mui/material";

type Option = {
  label: string;
};
type FieldProps = {
  name: string;
  required?: boolean;
  values: any;
  touched: any;
  label: string;
  helperText: string;
  options: Option[];
};
export const disabled = (
  values: any,
  valueOfFieldToCheckAgainst: string,
  fieldToCheckAgainst: string
) => {
  if (fieldToCheckAgainst) {
    return values[fieldToCheckAgainst] === valueOfFieldToCheckAgainst;
  }
  return false;
};
export default function BlackFormikAutocomplete({
  name,
  required,
  values,
  touched,
  label,
  helperText,
  options,
}: FieldProps) {
  const { setFieldValue } = useFormikContext();

  const handleChange = (newValue: string, form: any) => {
    form.touched[name] = true;
    form.values[name] = newValue;
    form.resetForm(form);
  };

  return (
    <Box>
      <Field name={name}>
        {(props: any) => {
          const { form } = props;
          return (
            <Autocomplete
              sx={{ marginBottom: "1rem" }}
              disableClearable
              options={options.map((option) => option.label ?? option)}
              value={form.values[name]}
              onChange={(event: any, newValue: string) => {
                handleChange(newValue, form);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label}
                  required={required}
                  helperText={helperText}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          );
        }}
      </Field>
    </Box>
  );
}
