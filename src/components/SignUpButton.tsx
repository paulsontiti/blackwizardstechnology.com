import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function SignUpButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/sign-up");
      }}
      sx={{
        textTransform: "capitalize",
        color: "white",
      }}
      variant="contained"
      size="small"
    >
      Sign Up
    </Button>
  );
}
