import { Box } from "@mui/material";
import ProfilePic from "./ProfilePicture";

export default function DP() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: 250,
      }}
    >
      <ProfilePic />
      <br />
    </Box>
  );
}
