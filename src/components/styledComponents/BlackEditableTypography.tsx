import { Box, Divider, Typography, Badge } from "@mui/material";
import BlackEditButton from "./BlackEditButton";
export function BlackTypography({
  label,
  value,
  onClikHandler,
}: {
  label: string;
  onClikHandler: () => void;
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
        <Badge
          badgeContent={<BlackEditButton onClick={onClikHandler} />}
          sx={{ minWidth: "50%", maxWidth: "50%" }}
        >
          <Typography
            variant="body2"
            height={30}
            bgcolor={"whitesmoke"}
            p={0.5}
            m={1}
            maxWidth={"100%"}
            minWidth={"100%"}
            borderRadius={"10%"}
            textTransform={"capitalize"}
          >
            {value}
          </Typography>
        </Badge>
      </Box>
      <Divider />
    </>
  );
}
