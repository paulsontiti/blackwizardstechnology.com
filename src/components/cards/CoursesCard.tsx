import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CoursesAccordion from "../accordions/CoursesAccordion";
import { useRouter } from "next/router";

export default function CoursesCard() {
  const router = useRouter();
  return (
    <Card
      sx={{
        maxWidth: "100%",
        zIndex: 100,
        mt: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "orange",
        bgcolor: "black",
        opacity: 0.9,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Our courses that will make you stand out in 24 months
        </Typography>
        <CoursesAccordion />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            color: "black",
            bgcolor: "orange",
            fontWeight: "bold",
            height: 50,
            m: 5,
          }}
          variant="contained"
          onClick={() => {
            router.push("/free-class");
          }}
        >
          Sign up for one month Free Class
        </Button>
      </CardActions>
    </Card>
  );
}
