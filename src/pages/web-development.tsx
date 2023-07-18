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

const WebDevelopment = () => {
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
              <Typography ml={2}>Build a simple website with HTML</Typography>
            </Box>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>Style your website with CSS</Typography>
            </Box>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>
                Program your website to be interactive with Javascript
              </Typography>
            </Box>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>
                Make your website appealing to users using UI,Ux and Graphics
                principles
              </Typography>
            </Box>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>
                Understand how client/server operation with HTTP
              </Typography>
            </Box>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>
                Make your website more advanced with ReactJs and NextJs
              </Typography>
            </Box>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>
                Store data collected from users, update, delete and read from a
                database with MongoDb
              </Typography>
            </Box>
            <Box display={"flex"} mb={2}>
              <DoneIcon />
              <Typography ml={2}>
                Make your website available to your users using Github and
                Vercel
              </Typography>
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
              <WebDevelopmentCourseDescription />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </RootLayout>
  );
};

export default WebDevelopment;
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
