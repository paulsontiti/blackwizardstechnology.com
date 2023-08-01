import RootLayout from "@/app/layout";
import {
  Box,
  Card,
  CardHeader,
  CardActions,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import LockClockIcon from "@mui/icons-material/LockClock";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { CountDown } from "@/lib/functions";
import { useRouter } from "next/router";
import ClockCountDown from "@/components/ClockCountDown";

const FreeSEClass = () => {
  const router = useRouter();
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
            <Typography mt={2} mb={1} variant="h6" color={"orange"}>
              {" "}
              Free Software Engineering Course
            </Typography>
            <Typography>{`A 2 weeks course to show you the process of developing a software and roles that can best fit you.`}</Typography>
          </Box>
          <Typography mb={2}>
            On completion of this course, you are going to understand how
            softwares are developed, the process involved and roles involved in
            the process.
          </Typography>
          <Box display={"flex"} alignItems={"center"} mb={1}>
            <Rating
              name="half-rating-read"
              size="small"
              value={4.5}
              precision={0.5}
              readOnly
            />
            <Typography component={"span"}>{`(100 ratings)`}</Typography>
            <Typography component={"span"} ml={1}>
              100 students
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography component={"span"} mr={1}>
              Created by{" "}
            </Typography>
            <Link href={"/"}>Black Wizards Technology</Link>
          </Box>
          <Card sx={{ mt: 5 }}>
            <CardHeader
              title="Free"
              subheader={
                <Box>
                  <Box display={"flex"}>
                    <DateRangeIcon />
                    <Typography ml={1}>
                      August 31,2023 - September 12,2023
                    </Typography>
                  </Box>
                  <ClockCountDown endDate={new Date("2023,08,31")} />
                </Box>
              }
            />

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
                  router.push(
                    "/questionnaire/course-sign-up?course=free-se-class"
                  );
                }}
              >
                Sign Up
              </Button>
              {/* <Button
                fullWidth
                variant="outlined"
                sx={{
                  color: "orange",
                  mb: 2,
                }}
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </Button> */}
            </CardActions>
          </Card>
        </Box>
      </Box>
    </RootLayout>
  );
};

export default FreeSEClass;
export function WebDevelopmentCourseDescription() {
  return (
    <Box p={3}>
      <Typography>
        Web development refers to the process of creating websites or web
        applications that are accessed over the internet. It involves the use of
        various technologies, programming languages, and tools to build the
        front-end (client-side) and back-end (server-side) components of a web
        application.
      </Typography>
      <Typography component={"p"}>
        It is a dynamic and ever-evolving field. Staying up-to-date with the
        latest web technologies, trends, and best practices is essential for
        building modern, responsive, and secure web applications.
      </Typography>
      <Typography component={"p"}>
        Here we shall have an overview of the key aspects of web development
        some of which include: HTML, CSS, SSL, Databases, web APIs and Services.
        Etc.
      </Typography>
      <Typography component={"p"}>
        In this course you will learn all that is needed to make you an expert
        in Web development. You will learn how to structure a website with HTML,
        style it with CSS and make it interactive with Javascript.
      </Typography>
      <Typography component={"p"}>
        You will also learn how to make your website user-friendly by
        undestanding the best principles of User Interface, User Experience and
        Graphics.
      </Typography>
      <Typography component={"p"}>
        After understanding the basics of HTML, CSS and Javascript, you will
        learn how the internet works in terms of client/server request and
        responses. Then you will learn more advanced technology like libraries
        and frameworks with ReactJs and NextJs.
      </Typography>
      <Typography component={"p"}>
        You will get to understand how databases and web applications work
        together in order to get data from users, store data, update, delete and
        read data with MongoDb.
      </Typography>
      <Typography component={"p"}>
        You will end the course by learning how Github works and hosting your
        website on Vercel.
      </Typography>
      <Typography component={"p"}>
        This is a 12 months course and you will be guided from the basics to the
        advanced level. On completion of the course, Black Wizards Technology
        will offer job to their best students.
      </Typography>
    </Box>
  );
}
