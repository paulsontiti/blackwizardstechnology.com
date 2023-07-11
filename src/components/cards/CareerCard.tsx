import * as React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import Image from "next/image";

export default function CareerCard() {
  const router = useRouter();
  return (
    <Box
      sx={{ maxWidth: "100%" }}
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row" }}
    >
      <Box display={{ xs: "none", md: "flex", lg: "none" }}>
        <Image
          src={"/assets/career.png"}
          width={500}
          height={400}
          alt="  Why a career in Software Engineering?"
        />
      </Box>
      <Box display={{ xs: "none", lg: "flex" }}>
        <Image
          src={"/assets/career.png"}
          width={800}
          height={500}
          alt="  Why a career in Software Engineering?"
        />
      </Box>

      <Box
        display={{ xs: "flex", md: "none" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={"/assets/career.png"}
          width={350}
          height={300}
          alt="  Why a career in Software Engineering?"
        />
      </Box>

      <Box m={2}>
        <Typography gutterBottom variant="h6" component="div">
          Why a career in Software Engineering?
        </Typography>
        <Typography variant="body2" color="text.secondary">
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
            onClick={() => {
              router.push("/why-software-engineering");
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Box>
    </Box>
  );
}
