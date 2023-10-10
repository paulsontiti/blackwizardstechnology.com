import { Box, Button, Typography } from "@mui/material";

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: any;
}) {
  console.log(error.stack);
  return (
    <Box>
      <Typography>An Error occurred: {error.message}</Typography>
      <Button onClick={reset}>Try again</Button>
    </Box>
  );
}
