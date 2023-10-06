import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CourseVideo from "../videos/CourseVideo";
import { Box } from "@mui/material";
import { CourseEpisodeType } from "@/lib/types/course";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import VerifiedIcon from "@mui/icons-material/Verified";
import PendingIcon from "@mui/icons-material/Pending";

export default function DayAccordion({
  dayNumber,
  videosForToday,
  courseId,
}: {
  dayNumber: number;
  courseId: string;
  videosForToday: CourseEpisodeType[];
}) {
  //check for completed episodes
  const courseDetails = useSelector(
    (state: RootState) => state.courseDetails.courseDetails
  );
  let doneEpisodesCount = 0;
  const completedEpisodeNumbers: number[] = [];
  courseDetails?.coursesTaken.map((details) => {
    details.episodes.map((ep) => {
      if (ep.score) {
        completedEpisodeNumbers.push(ep.episodeNumber);
      }
    });
    videosForToday.map((video) => {
      completedEpisodeNumbers.map((epNum) => {
        if (video.episodeNumber === epNum) {
          doneEpisodesCount++;
        }
      });
    });
  });

  return (
    <Box maxWidth={"100%"}>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{`Class ${dayNumber}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {videosForToday.map((episode) => (
            <CourseVideo
              assignmentLink={episode.assignmentLink}
              episodeNumber={episode.episodeNumber}
              key={episode.title}
              courseTitle={episode.courseTitle}
              videoSrc={episode.videoSrc}
              title={episode.title}
              duration={`${episode.duration} mins`}
              downloadablePdf={episode.downloadablePdf}
              quickTest={episode.quickTest}
              assignment={episode.assignment}
              courseId={courseId}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
