"use client";
import React from "react";
import { Box } from "@mui/material";
import HoursSpentDailyRadioButtonsGroup from "../radioButtonGroup/HoursSpentDailyRadioButtonGroup";
import CoursesTab from "../tabs/CoursesTab";
import { StudentCommitedTime } from "@/lib/types/course";

export default function CourseDetailsComponent() {
  const [numHours, setNumHours] = React.useState<StudentCommitedTime>(1);

  const handleChange = (value: StudentCommitedTime) => {
    setNumHours(value);
  };
  return (
    <Box minWidth={"100%"} maxWidth={"100%"}>
      <HoursSpentDailyRadioButtonsGroup handleTimeChoice={handleChange} />
      <CoursesTab numHours={numHours} />
    </Box>
  );
}
