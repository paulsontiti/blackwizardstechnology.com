"use client";
import React from "react";
import { Box } from "@mui/material";
import CoursesTab from "../tabs/CoursesTab";

export default function CourseDetailsComponent() {
  return (
    <Box minWidth={"100%"} maxWidth={"100%"}>
      <CoursesTab />
    </Box>
  );
}
