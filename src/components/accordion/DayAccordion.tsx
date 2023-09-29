import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CourseVideo from "../videos/CourseVideo";
import { Box } from "@mui/material";
import { CourseEpisodeType } from "@/lib/types/course";

export default function DayAccordion({
  dayNumber,
  videosForToday,
  courseId,
}: {
  dayNumber: number;
  courseId: string;
  videosForToday: CourseEpisodeType[];
}) {
  //console.log(episodesNumber);

  return (
    <Box maxWidth={"100%"}>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{`Day ${dayNumber}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {videosForToday.map((episode) => (
            <CourseVideo
              episodeNumber={episode.episodeNumber}
              key={episode.title}
              courseTitle={episode.courseTitle}
              videoSrc={episode.videoSrc}
              title={episode.title}
              duration={`${episode.duration} mins`}
              downloadablePdf={episode.downloadablePdf}
              quickTest={episode.quickTest}
              assignment="What is abstraction"
              courseId={courseId}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
