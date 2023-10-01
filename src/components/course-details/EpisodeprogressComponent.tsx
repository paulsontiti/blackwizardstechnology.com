"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import PendingIcon from "@mui/icons-material/Pending";
import { theme } from "@/app/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const EpisodeprogressComponent = ({
  courseId,
  episodeNumber,
}: {
  courseId: string;
  episodeNumber: number;
}) => {
  const courseDetails = useSelector(
    (state: RootState) => state.courseDetails.courseDetails
  );
  let score = 0;
  let assignmentAns = "";
  if (courseDetails) {
    //get score answer
    score = courseDetails.coursesTaken
      .find((course) => course.courseId === courseId)
      ?.episodes.find((ep) => ep.episodeNumber === episodeNumber)
      ?.score as number;
    //get score answer
    assignmentAns = courseDetails.coursesTaken
      .find((course) => course.courseId === courseId)
      ?.episodes.find((ep) => ep.episodeNumber === episodeNumber)?.assignment
      .answer as string;
  }
  return <DesktopJobProgress score={score} assignmentAns={assignmentAns} />;
};

export default EpisodeprogressComponent;

function JobprogressNumber({ number }: { number: number }) {
  return (
    <Box
      width={30}
      height={30}
      borderRadius={"50%"}
      bgcolor={theme.bwt[500]}
      color={"white"}
      textAlign={"center"}
      fontWeight={"bold"}
      mb={1}
    >
      {number}
    </Box>
  );
}

function JobProgressLabel({ label, value }: { label: string; value: any }) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      minWidth={{ xs: "40%", sm: "20%" }}
      maxWidth={{ xs: "40%", sm: "20%" }}
    >
      <Typography variant="body1" fontWeight={"bold"}>
        {label}
      </Typography>
      {value ? <DoneIcon color="success" /> : <PendingIcon color="error" />}
    </Box>
  );
}
function JobProgressLine() {
  return (
    <Box
      minWidth={{ xs: "40%", sm: "20%" }}
      maxWidth={{ xs: "40%", sm: "20%" }}
      height={3}
      bgcolor={theme.bwt[500]}
      ml={0}
      mb={0}
    ></Box>
  );
}

function DesktopJobProgress({
  score,
  assignmentAns,
}: {
  score: number;
  assignmentAns: string;
}) {
  return (
    <Box>
      <Typography m={2} fontWeight={"bold"}>
        Lesson progress
      </Typography>
      <Box alignItems={"center"} justifyContent={"flex-start"} display={"flex"}>
        <JobprogressNumber number={1} /> <JobProgressLine />
        <JobprogressNumber number={2} />
      </Box>
      <Box alignItems={"center"} justifyContent={"flex-start"} display={"flex"}>
        <JobProgressLabel label="Quiz" value={score} />
        <JobProgressLabel label="Assignment" value={assignmentAns} />
      </Box>
    </Box>
  );
}
