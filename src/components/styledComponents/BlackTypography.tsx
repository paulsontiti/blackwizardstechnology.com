import { Box, Divider, Typography } from "@mui/material";

export function BlackTypography({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <>
      <Box display={"flex"}>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          height={30}
          bgcolor={"whitesmoke"}
          p={0.5}
          m={1}
          maxWidth={"40%"}
          minWidth={"40%"}
          borderRadius={"10%"}
        >
          {label}:
        </Typography>{" "}
        <Typography
          variant="body2"
          height={30}
          bgcolor={"whitesmoke"}
          p={0.5}
          m={1}
          maxWidth={"60%"}
          minWidth={"60%"}
          borderRadius={"10%"}
          textTransform={"capitalize"}
        >
          {value}
        </Typography>
      </Box>
      <Divider />
    </>
  );
}
