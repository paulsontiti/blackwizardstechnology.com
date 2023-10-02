"use client";

import HomeAppBar from "@/components/home/AppBar";
import CareerCard from "@/components/home/CareerCard";
import CourseHighlight from "@/components/home/CourseHighlight";
import Footer from "@/components/home/Footer";
import VideoComponent from "@/components/videos/VideoComponent";
import { RootState } from "@/store";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state: RootState) => state.users.user);
  const router = useRouter();
  return (
    <main>
      <HomeAppBar />
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
      <Box
        component="img"
        sx={{ objectFit: "contain" }}
        width={"100%"}
        height={"auto"}
        src={"/assets/cover-photo.jpg"}
        onClick={() => {
          if (user && user.userName) {
            router.push("/dashboard/course-details");
          } else {
            router.push("/register");
          }
        }}
        alt="cover photo"
      />
      <Footer />
      {/* <Link href={"/register"}>Register</Link>
      <Link href={"/login"}>Login</Link> */}
    </main>
  );
}
