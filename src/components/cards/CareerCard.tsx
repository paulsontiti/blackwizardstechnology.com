import * as React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function CareerCard() {
  const router = useRouter();
  return (
    <Box
      sx={{
        maxWidth: "100%",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        bgcolor: "black",
        flexDirection: { xs: "column", sm: "row" },
        opacity: 0.9,
      }}
    >
      {/* <Box
        component="img"
        sx={{
          height: 400,
          display: "block",
          overflow: "hidden",
          width: { xs: "100%", sm: "50%" },
        }}
        src={"/assets/career.png"}
        alt="Why a career in Software Engineering"
      /> */}

      <Box m={2} width={{ xs: "98%", sm: "50%" }}>
        <Typography gutterBottom variant="h6" color="orange" p={2}>
          Why a career in the tech industry in this bad economy?
        </Typography>
        <Typography variant="body2" color="white" pl={2}>
          The tech industry is rapidly growing, and the demand for skilled tech
          professionals is on the rise. According to Global Reports, the global
          e-learning market size valued at $399.3 billion in 2022 is expected to
          grow by 14% between 2023 and 2032, driven by the growing demand for IT
          skills in various industries. This presents a significant opportunity
          for IT experts to address the growing demand for skilled tech
          professionals. As a Software Engineering expert, there are so many
          accrued benefits, some of which include;
        </Typography>
        <CardActions>
          <Button
            size="small"
            sx={{ color: "orange" }}
            onClick={() => {
              router.push("/why-a-career-in-se");
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Box>
    </Box>
  );
}
