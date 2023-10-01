import { Alert, Box } from "@mui/material";
import React from "react";
function SuccessAlert({ message }: { message: string }) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      mt={2}
      maxWidth={"90%"}
    >
      <Alert severity="success" sx={{ minWidth: "100%", maxWidth: "100%" }}>
        {message}!
      </Alert>
    </Box>
  );
}

export default SuccessAlert;
