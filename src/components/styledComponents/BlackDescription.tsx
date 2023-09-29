import { Box, Divider, Typography } from "@mui/material";
export function BlackDescription({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <Box minWidth={"100%"} maxWidth={"100%"}>
      <Box bgcolor={"whitesmoke"} p={1}>
        <Typography variant="body2" fontWeight={"bold"} ml={1} mb={1}>
          {label}:
        </Typography>{" "}
        <Typography variant="caption">{description}</Typography>
      </Box>
      <Divider />
    </Box>
  );
}
