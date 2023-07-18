// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'
import RootLayout from "@/app/layout";
import CourseHighlight from "@/components/bottomNavigation/CourseHighlight";
import DesignedToSuit from "@/components/bottomNavigation/DesignedToSuit";
import CareerCard from "@/components/cards/CareerCard";
import CoursesCard from "@/components/cards/CoursesCard";
import IntroStepper from "@/components/stepper/IntroStepper";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <RootLayout>
          {/* <Image
            src={"/assets/software-engineering.jpeg"}
            fill
            alt="Black Wizards Technology"
          /> */}
          <IntroStepper />
          <CareerCard />

          <Box
            mt={5}
            mb={{ xs: 25, md: 10 }}
            // bgcolor={"black"}
            // display={"flex"}
            // alignItems={"center"}
            // justifyContent={"ccenter"}
            // flexDirection={"column"}
            // minWidth={"100%"}
            // sx={{ opacity: 0.8 }}
          >
            <Typography variant="h6" textAlign={"center"}>
              Designed To Suit You
            </Typography>
            <DesignedToSuit />
          </Box>
          <CoursesCard />

          <Box mt={{ xs: 10, lg: 5 }} mb={{ xs: 50, sm: 30, md: 20 }}>
            <Typography variant="h6" textAlign={"center"} fontWeight={"bold"}>
              Course Highlights
            </Typography>
            <CourseHighlight />
          </Box>
        </RootLayout>
      </main>
    </>
  );
}

function OurName() {
  return (
    <Box mt={5} mb={5}>
      <Typography variant="h6">
        {`Why the name  `}
        <Typography
          component="span"
          variant="h5"
          fontWeight={"bold"}
        >{`   "Black Wizards"?`}</Typography>
      </Typography>

      <Box mt={3}>
        <Typography>
          We are Black Wizards Technology. Some may wonder and ask why the name
          as there may be some arising controversies surrounding our brand.
          Here’s why. We are Africans, often referred to as “Blacks” and in most
          African cultures, Wizards are revered for their wisdom, expertise and
          ability to solve complex problems.
          <Button sx={{ textTransform: "lowercase" }}>Read more</Button>
        </Typography>
      </Box>
    </Box>
  );
}
function NoComputerBackGround() {
  return (
    <Box position={"relative"}>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Image
          src={"/assets/no-comp-background.jpg"}
          alt=""
          width={350}
          height={300}
        />
      </Box>
      <Box position={"absolute"} top={10} color={"white"} ml={2}>
        <Typography
          variant="h6"
          fontWeight={"bold"}
        >{`Do you know you can become a software engineer without a background in computer science?`}</Typography>
        <Button variant="contained" sx={{ bgcolor: "black", mt: 5, ml: 1 }}>
          {" "}
          Learn How
        </Button>
      </Box>
    </Box>
  );
}
function Courses() {
  return (
    <Box mt={5}>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Image
          src={"/assets/software-roles.jpg"}
          alt=""
          width={350}
          height={300}
        />
      </Box>
      <Box mt={2}>
        <Typography variant="h6">
          What you need to learn to become an expert in Software Engineering
        </Typography>
      </Box>
    </Box>
  );
}
