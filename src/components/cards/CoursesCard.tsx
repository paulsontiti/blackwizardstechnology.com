import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CoursesAccordion from "../accordions/CoursesAccordion";

export default function CoursesCard() {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{ height: { xs: 250, sm: 300, md: 400, lg: 500 } }}
        image="/assets/software-roles.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          What you need to learn to become an expert in Software Engineering
        </Typography>
        <CoursesAccordion />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
