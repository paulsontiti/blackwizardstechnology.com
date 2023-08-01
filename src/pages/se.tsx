import RootLayout from "@/app/layout";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import LockClockIcon from "@mui/icons-material/LockClock";
import { useRouter } from "next/router";

const SE = () => {
  return (
    <RootLayout>
      <Box
        bgcolor={"black"}
        color={"white"}
        pt={15}
        pl={{ xs: 1, sm: 5 }}
        mb={10}
      >
        <Box
          maxWidth={{ xs: 300, sm: 600 }}
          ml={{ md: 20 }}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          mb={5}
        >
          <Box mb={5}>
            <Typography mt={2} variant="h6" color={"orange"}>
              {" "}
              The Complete Web Development Course
            </Typography>
            <Typography variant="caption">{`From beginner's level with no experience to an expert in web development`}</Typography>
          </Box>
          <Typography mb={2}>
            Become a Fullstack Web Developer in 12 months and an expert in HTML,
            CSS, Javascript, UI, UX, Graphics, HTTP, ReactJs, NextJs and
            MongoDB.
          </Typography>
          <Typography mb={2} variant="caption">
            On completion of this course, Black Wizards Technology will offer
            you a job of 600,000 naira - 1,200,000 naira in your first year and
            you work remotely from the comfort of your home!!!
          </Typography>
          <Box display={"flex"} alignItems={"center"} mb={1}>
            <Rating
              name="half-rating-read"
              size="small"
              value={4.5}
              precision={0.5}
              readOnly
            />
            <Typography
              variant="caption"
              component={"span"}
            >{`(100 ratings)`}</Typography>
            <Typography variant="caption" component={"span"} ml={1}>
              100 students
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="caption" component={"span"} mr={1}>
              Created by{" "}
            </Typography>
            <Link href={"/"}>Black Wizards Technology</Link>
          </Box>
          <Card sx={{ mt: 5 }}>
            <CardHeader
              title=" ₦300,000"
              subheader={
                <Box>
                  <Box display={"flex"}>
                    <Typography sx={{ textDecoration: "line-through" }}>
                      ₦600,000
                    </Typography>
                    <Typography ml={1}>50% off</Typography>
                  </Box>
                  <Box display={"flex"}>
                    <LockClockIcon color="error" />
                    <Typography ml={1} variant="caption">
                      24 hours, 23 minutes left at this price
                    </Typography>
                  </Box>
                </Box>
              }
            />
            <CardContent>
              <Typography variant="h6">Empathy for our students</Typography>
              <ul>
                <li>
                  Pay installmentally, ₦50,000 for the first 6(six) months
                </li>
                <li>
                  Secure this offer by making a deposit of ₦50,000 before the
                  offer ends
                </li>
                <li>
                  Get ₦5,000 for anybody that you refer to this program and
                  ₦30,000 if they make full payment
                </li>
              </ul>
            </CardContent>
            <CourseCallToAction freeClassUrl="/free-web-class" />
          </Card>
        </Box>
        <Card
          sx={{
            mr: 2,
            ml: 1,
          }}
        >
          <CardHeader
            title="What you will learn"
            subheader="Choose a project and we will help you build it"
          />
          <CardContent>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>Introduction To Computing Systems</Typography>
            </Box>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>Software Project Management</Typography>
            </Box>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>
                Software Requirement Analysis and Design
              </Typography>
            </Box>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>Software Architecture and Design</Typography>
            </Box>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>Computer Programming</Typography>
            </Box>

            <Box mt={5}>
              <Typography variant="h6">Requirements</Typography>
              <ul>
                <li>No Computer Science background</li>
                <li>No Programming experience</li>
                <li>A Computer of at least 4GB RAM </li>
              </ul>
              <Typography variant="caption">
                We will help you with all the softwares you need for free
              </Typography>
            </Box>
            <Box mt={5}>
              <Typography variant="h6">Description</Typography>
              <SECourseDescription />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </RootLayout>
  );
};

export default SE;
export function SECourseDescription() {
  return (
    <Box p={3}>
      <Typography component={"p"} variant="body2">
        While a computer science degree may provide a strong foundation and give
        a more comprehensive understanding of theoretical concepts, it is not
        the only path to mastering Software Engineering. Hands-on training and
        practical experience are more valuable and cannot be overlooked in the
        quest to master software engineering. We at Black Wizards Technology
        prioritize practical skills and problem-solving abilities and that is
        where our focus will be laid.
      </Typography>
      <Typography component={"p"} variant="body2">
        It is important to us that everyone is carried along and that is why we
        have programmed our courses for each package to begin with the basics.
        We have a beginners extensive course which will cover the fundamentals
        where we aim at giving our students a perfect understanding of the
        entire computer system and its components. This will form a basis for
        the subsequent programs that make up a software Engineering course.
      </Typography>
      <Typography component={"p"} variant="body2">
        We are not just offering to make you a software Engineer, we will
        provide you with a step by step guide on how to get to the peak of your
        career as a Software Engineer, be it as a beginner, an intermediate
        student or an expert. Explore further for a more comprehensive info on
        how to be a part of the Black Wizard Technology.
      </Typography>
    </Box>
  );
}

export function CourseCallToAction({ freeClassUrl }: { freeClassUrl: string }) {
  const router = useRouter();
  return (
    <CardActions
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Button
        fullWidth
        variant="contained"
        sx={{
          bgcolor: "black",
          color: "orange",
          mb: 2,
        }}
        onClick={() => {
          router.push("/course-sign-up");
        }}
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          router.push(freeClassUrl);
        }}
        fullWidth
        variant="outlined"
        sx={{
          borderColor: "black",
          color: "orange",
        }}
      >
        Join a free Class
      </Button>
    </CardActions>
  );
}
