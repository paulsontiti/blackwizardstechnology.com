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
        <Typography>
          We at Black Wizards Technology are customer centric and that is why we
          have tailored all our programs to suit you. We shall pay attention to
          your needs, specifications, expectations and preferences. We have
          various packages for various individuals, we also have various
          commitment levels all of which will be presented to our students to
          make their preferred choice. We are so flexible and accommodating that
          whatever is not available in a portfolio would be provided as long as
          it is a requirement or need. We are open to working with your time,
          your needs and are willing to help find a way around your budget in
          situations where it doesn’t meet up with our requirement
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
