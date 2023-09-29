"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WeekAccordion from "../accordion/WeekAccordion";
import { Course } from "@/lib/classes/course";
import { CourseType, StudentCommitedTime } from "@/lib/types/course";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CoursesTab({
  numHours,
}: {
  numHours: StudentCommitedTime;
}) {
  const [value, setValue] = React.useState(0);
  const [error, setError] = React.useState("");
  const [courses, setCourses] = React.useState<CourseType[] | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //fetch courses
  React.useEffect(() => {
    (async () => {
      const data = await Course.getFetchData("");
      if (data.ok) {
        setCourses(data.value);
      } else {
        setError(data.error);
      }
    })();
  }, []);
  if (!courses) return <p>loading.....</p>;
  if (error) return <p>Error occurred</p>;

  //create course array from the data from database
  const coursesArray = courses.map((course) => {
    const courseObj = new Course();
    courseObj.name = course.name;
    courseObj.courseId = course._id;
    courseObj.noOfEpisodes = course.noOfEpisodes;
    courseObj.noOfSeasons = course.noOfSeasons;
    courseObj.noOfVideosPerDay = numHours;

    return courseObj;
  });
  return (
    <Box
      sx={{
        minWidth: { xs: "100%", md: "70%" },
        maxWidth: { xs: "100%", md: "70%" },
      }}
      mt={2}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          scrollButtons
          allowScrollButtonsMobile
          variant="scrollable"
          sx={{ minWidth: "100%", maxWidth: "100%" }}
        >
          {coursesArray.map((course) => (
            <Tab
              key={course.courseId}
              label={course.name}
              {...a11yProps(0)}
              wrapped
            />
          ))}
        </Tabs>
      </Box>
      {coursesArray.map((course, i) => (
        <CustomTabPanel key={course.name} value={value} index={i}>
          {/* iterate all the weeks for the course */}
          {course.noOfWeeksArrary.map((num) => (
            <WeekAccordion
              key={num}
              weekNumber={num}
              noOfVideosPerDay={course.noOfVideosPerDay}
              courseName={course.name}
              courseId={course.courseId}
            />
          ))}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
