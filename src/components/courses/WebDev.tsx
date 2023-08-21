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
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useRouter } from "next/router";
import ClockCountDown from "@/components/ClockCountDown";
import Comments from "@/components/Comments";
import { WebDevelopmentCourseDescription } from "@/pages/web-development";

const WebDevCourse = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Box bgcolor={"black"} color={"white"} pt={15} p={{ xs: 1, sm: 5 }}>
        <Box
          maxWidth={{ xs: "100%", sm: 600 }}
          minWidth={{ xs: "100%", sm: 600 }}
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
            Become a Fullstack Web Developer in 6 months and an expert in HTML,
            CSS, Javascript,Typscript,HTTPS, ReactJs, NextJs and MongoDB.
          </Typography>
          <Typography mb={2} variant="caption">
            On completion of this course, Black Wizards Technology will offer
            you a job of ₦600,000 - ₦1,200,000 in your first year and you work
            remotely from the comfort of your home!!!
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

          <Card sx={{ mt: 5, minWidth: "100%", maxWidth: "100%" }}>
            <CardHeader
              title=" ₦100,000"
              subheader={
                <Box>
                  <Box display={"flex"}>
                    <Typography sx={{ textDecoration: "line-through" }}>
                      ₦600,000
                    </Typography>
                    <Typography ml={1}>83% off</Typography>
                  </Box>
                  <ClockCountDown endDate={new Date("2023,08,31")} />
                </Box>
              }
            />
            <CardContent>
              <Typography variant="h6">Empathy for our students</Typography>
              <ul>
                <li>Pay installmentally, ₦50,000 for 2(two) months</li>
                <li>
                  Secure this offer by making a deposit of ₦50,000 before the
                  offer ends
                </li>
                <li>Get ₦5,000 for anybody that you refer to this program</li>
              </ul>
            </CardContent>
            <CourseCallToAction course="web-develpment" />
            <CardActions>
              <Button
                sx={{ textTransform: "lowercase" }}
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                {showMore ? "see less" : "see more"}
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
      <Box display={showMore ? "block" : "none"}>
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
              Make your website available to your users using Github and Vercel
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
          <Comments
            subject="web develpment course"
            title="What do you think about this course"
          />
        </CardContent>
      </Box>
    </>
  );
};

export default WebDevCourse;

export function CourseCallToAction({ course }: { course: string }) {
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
          router.push(`/payment?course=${course}`);
        }}
      >
        Pay For This Course
      </Button>
    </CardActions>
  );
}
