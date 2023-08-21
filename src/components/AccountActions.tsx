import { Box } from "@mui/material";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

export default function AccountActions() {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <LoginButton />
      <SignUpButton />
    </Box>
  );
}
