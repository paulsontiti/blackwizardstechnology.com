import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SupportCard() {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{ height: { xs: 350, sm: 300, md: 400, lg: 500 } }}
        image="/assets/support.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Support from day one
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We are ready to hold your hands and walk with you every step of the
          way. No student will be left behind, no program or effort will be in
          vain as we make it a point of duty to ensure that you get optimum
          value for your money and time.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sign Up for free class</Button>
      </CardActions>
    </Card>
  );
}
