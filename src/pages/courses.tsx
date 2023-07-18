import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import RootLayout from "@/app/layout";
import CoursesCard from "@/components/cards/CoursesCard";
function CoursesPage() {
  return (
    <RootLayout>
      <Container sx={{ mt: 20, mb: 20 }}>
        <CoursesCard />
      </Container>
    </RootLayout>
  );
}

export default CoursesPage;
