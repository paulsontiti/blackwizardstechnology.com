import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import RootLayout from "@/app/layout";
function CoursesPage() {
  return (
    <RootLayout>
      <Container sx={{ mt: 20, mb: 20 }}>
        <Typography variant="h5" fontWeight={"bold"} mb={2}>
          Our Mission
        </Typography>
        <Typography>
          To become a leading firm in the software development and training
          industry, raising a strong army of Tech experts, providing innovative
          solutions, and empowering great individuals and businesses to thrive
          and become experts in the digital age.
        </Typography>
      </Container>
    </RootLayout>
  );
}

export default CoursesPage;
