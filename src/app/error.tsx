"use client";

import { Box, Button, Typography } from "@mui/material";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Box>
      <Typography>An Error occurred: {error.message}</Typography>
      <Button onClick={reset}>Try again</Button>
    </Box>
  );
}
