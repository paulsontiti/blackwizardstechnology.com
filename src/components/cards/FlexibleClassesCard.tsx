import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function FlexibleClassesCard() {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{ height: { xs: 250, sm: 300, md: 400, lg: 500 } }}
        image="/assets/flexible.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Designed to suit you
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Image src={"/assets/calender.png"} alt="" width={100} height={100} />
          <Typography>Our Courses are designed to suit your time</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Image
            src={"/assets/pay-as-you-go.png"}
            alt=""
            width={100}
            height={100}
          />
          <Typography>Our Courses are designed to suit your tim</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Image src={"/assets/tution.png"} alt="" width={100} height={100} />
          <Typography>Our Courses are designed to suit your tim</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
