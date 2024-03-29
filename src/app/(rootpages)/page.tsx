import CareerCard from "@/components/home/CareerCard";
import CourseHighlight from "@/components/home/CourseHighlight";
import FreeCourse from "@/components/home/FreeCourse";
import VideoComponent from "@/components/videos/VideoComponent";
import { Box, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Black Wizards Technolgy",
  description: "We are the best",
};

export default function Home() {
  return (
    <main>
      {/* <Image src={"/assets/future_technology_prospects.png"} alt="" fill /> */}
      <Box
        component="img"
        sx={{ objectFit: "contain" }}
        width={"100%"}
        height={"auto"}
        src={"/assets/future_technology_prospects.png"}
        alt="cover photo"
      />
      <CareerCard />
      <VideoComponent src="/assets/11-year-old.mp4" />
      <Box mt={{ xs: 2, lg: 5 }} mb={{ xs: 50, sm: 30, md: 20 }}>
        <Typography variant="h6" textAlign={"center"} fontWeight={"bold"}>
          Course Highlights
        </Typography>
        <CourseHighlight />
      </Box>
      <FreeCourse />
      {/* <Link href={"/register"}>Register</Link>
      <Link href={"/login"}>Login</Link> */}
    </main>
  );
}
