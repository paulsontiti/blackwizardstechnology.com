import { BlackAutoCompleteFreeSoloProps } from "@/lib/types/forms";
import { Autocomplete, TextField } from "@mui/material";

export function BlackAutocompleteFreeSolo({
  options,
  label,
  value,
  placeholder,
  helperText,
  onChange,
}: BlackAutoCompleteFreeSoloProps) {
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      value={value}
      options={options.map((option) => option.question)}
      onChange={(event: any, newValue: string | null) => {
        onChange(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          helperText={helperText}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
}
