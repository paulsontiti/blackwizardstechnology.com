import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Image from "next/image";

interface AdDetails {
  title: string;
  message: string;
  landingPage: string;
  src: string;
}

export default function AdvertCard({
  title,
  message,
  src,
}: {
  title: string;
  message: string;
  src: string;
}) {
  return (
    <Box
      display={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      mb={2}
      pl={{ xs: 0, md: 15 }}
      pr={{ xs: 0, md: 15 }}
    >
      <Box
        sx={{
          position: "relative",
          minWidth: { xs: "100%", md: "40%" },
          maxWidth: { xs: "100%", md: "40%" },
        }}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Image
          src={src}
          width={300}
          height={400}
          alt=""
          style={{ minWidth: "100%", maxHeight: "100%" }}
        />
      </Box>
      <Box
        sx={{
          minWidth: { xs: "100%", md: "50%" },
          maxWidth: { xs: "100%", md: "50%" },
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </Box>
    </Box>
  );
}
