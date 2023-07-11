import * as React from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

export default function BWTIntoCard() {
  const router = useRouter();
  return (
    <Box
      sx={{ maxWidth: 350 }}
      color={"white"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      mt={{ xs: 25, sm: 30, md: 25 }}
    >
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        fontSize={"1.5rem"}
        fontWeight={"bold"}
        color="orange"
        zIndex={100}
      >
        {`Did you know you can become a software Engineer without a background in Computer Science? Let us help you get it done`}
      </Typography>
      <Typography zIndex={100} mb={2}>
        While a computer science degree may provide a strong foundation and give
        a more comprehensive understanding of theoretical concepts, it is not
        the only path to mastering Software Engineering.
      </Typography>
      <CardActions>
        <Button
          onClick={() => {
            router.push("/free-class");
          }}
          size="small"
          variant="contained"
          sx={{ bgcolor: "orange", color: "black", fontWeight: "bold" }}
        >
          Sign Up For A Free Class
        </Button>
        <Button
          size="small"
          variant="outlined"
          sx={{ color: "orange" }}
          onClick={() => {
            router.push("/no-background");
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Box>
  );
}
