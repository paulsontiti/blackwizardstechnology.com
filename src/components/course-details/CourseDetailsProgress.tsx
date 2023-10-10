"use client";
import { Box, Grid, Typography } from "@mui/material";
import CourseDetailsAccordion from "../accordion/CourseDetailsAccordion";
import { theme } from "../ThemeProvider";

export function CourseDetailsProgress() {
  return (
    <Box minWidth={"100%"} maxWidth={"100%"}>
      <Typography m={2} fontWeight={"bold"}>
        Course Details
      </Typography>
      <Box
        minWidth={"100%"}
        maxWidth={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={1}>
            {" "}
            <ProgressNumber number={1} />
          </Grid>
          <Grid item xs={11}>
            {" "}
            <CourseDetailsAccordion courseName="Introduction To Computing System" />
          </Grid>
        </Grid>
        <Box minWidth={"100%"} maxWidth={"100%"} display={"flex"}>
          <ProgressLine />
        </Box>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={1}>
            {" "}
            <ProgressNumber number={2} />
          </Grid>
          <Grid item xs={11}>
            {" "}
            <CourseDetailsAccordion courseName="Operating System" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function ProgressNumber({ number }: { number: number }) {
  return (
    <Box
      width={20}
      height={20}
      borderRadius={"50%"}
      bgcolor={theme.bwt[500]}
      color={"white"}
      textAlign={"center"}
      fontWeight={"bold"}
    >
      {number}
    </Box>
  );
}

function ProgressLabel({ label }: { label: string }) {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
      <Typography variant="body1" fontWeight={"bold"}>
        {label}
      </Typography>
    </Box>
  );
}
function ProgressLine() {
  return (
    <Box
      minWidth={3}
      maxWidth={3}
      height={50}
      maxHeight={"auto"}
      bgcolor={theme.bwt[500]}
      ml={1}
      mb={0}
    ></Box>
  );
}
