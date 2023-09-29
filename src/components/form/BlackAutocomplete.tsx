import { BlackAutoCompleteProps, Option } from "@/lib/types/forms";
import { Autocomplete, TextField } from "@mui/material";

export function BlackAutocomplete({
  options,
  label,
  placeholder,
  helperText,
  onChange,
}: BlackAutoCompleteProps) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      fullWidth
      onChange={(event: any, newValue: Option | null) => {
        onChange(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          helperText={helperText}
        />
      )}
    />
  );
}
