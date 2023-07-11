import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import RootLayout from "@/app/layout";
function VisionPage() {
  return (
    <RootLayout>
      <Container sx={{ mt: 20, mb: 20 }}>
        <Typography variant="h5" fontWeight={"bold"} mb={2}>
          Our Vision
        </Typography>
        <Typography>
          To create a world where technology is accessible to all, where
          individuals and organizations have the skills and knowledge to
          leverage its potential, and where innovation drives sustainable growth
          and development.
        </Typography>
      </Container>
    </RootLayout>
  );
}

export default VisionPage;
