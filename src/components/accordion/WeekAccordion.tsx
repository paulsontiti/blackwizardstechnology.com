"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DayAccordion from "./DayAccordion";
import { Box } from "@mui/material";
import { CourseEpisode } from "@/lib/classes/courseEpisode";
import { CourseEpisodeType } from "@/lib/types/course";

export default function WeekAccordion({
  weekNumber,
  noOfVideosPerDay,
  courseId,
  loading,
}: {
  noOfVideosPerDay: number;
  loading: (value: boolean) => void;
  courseId: string;
  weekNumber: number;
  courseName: string;
}) {
  const [episodes, setEpisodes] = React.useState<CourseEpisodeType[] | null>(
    null
  );
  const [error, setError] = React.useState("");
  React.useEffect(() => {
    (async () => {
      const data = await CourseEpisode.getFetchData(courseId);
      if (data.ok) {
        setEpisodes(data.value);
      } else {
        setError(data.error);
      }
      loading(false);
    })();
  }, [courseId, loading]);
  if (!episodes) return <p></p>;
  if (error) return <p></p>;

  const episodeVideosArray: CourseEpisodeType[] = episodes.map((ep) => {
    ep.videoSrc = `/classes/${ep.courseId as string}/Lesson-${
      ep.episodeNumber
    }.mp4`;
    return ep;
  });
  //compute number of episodes in day by day number,number of vidoes per week,week number, number of videos per day
  const episodesNumbers = (dayNumber: number) => {
    const videosPerWeek = noOfVideosPerDay * 5;
    let startEpisode = weekNumber * videosPerWeek - (videosPerWeek - 1);
    let endEpisode = weekNumber * videosPerWeek;
    const arr: number[] = [];
    for (let i = startEpisode; i <= endEpisode; i++) {
      arr.push(i);
    }
    const episodeNumbersByNoOfVideosperday: number[] = [];
    // arr.map((num, index) => {
    //   for (let i = 0; i < noOfVideosPerDay; i++) {
    //     episodeNumbersByNoOfVideosperday.push(index + 1);
    //   }
    // });
    // for (let i = 0; i < perWeek; i++) {
    //   arr.map((num, i) => {
    //     if (i + 1 <= noOfVideosPerDay) {
    //       episodeNumbersByNoOfVideosperday.push(i + 1);
    //     }
    //   });
    // }
    let startCount = 0;

    switch (true) {
      case noOfVideosPerDay === 2: {
        if (dayNumber === 2) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber;
        } else if (dayNumber === 3) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber + 1;
        } else if (dayNumber === 4) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber + 2;
        } else if (dayNumber === 5) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber + 3;
        } else {
          startCount = weekNumber * videosPerWeek - (videosPerWeek - 1);
        }
        let endCount = startCount + noOfVideosPerDay;
        //console.log(weekNumber, dayNumber, startCount, endCount);
        for (let i = startCount; i < endCount; i++) {
          episodeNumbersByNoOfVideosperday.push(i);
        }
        const videosForToday: CourseEpisodeType[] = [];
        episodeVideosArray.map((ep) => {
          return episodeNumbersByNoOfVideosperday.map((num) => {
            if (num.toString() === ep.episodeNumber.toString()) {
              videosForToday.push(ep);
            }
          });
        });

        return videosForToday;
      }

      case noOfVideosPerDay === 4: {
        if (dayNumber === 2) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber + 2;
        } else if (dayNumber === 3) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber + 5;
        } else if (dayNumber === 4) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber + 8;
        } else if (dayNumber === 5) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber + 11;
        } else {
          startCount = weekNumber * videosPerWeek - (videosPerWeek - 1);
        }
        let endCount = startCount + noOfVideosPerDay;
        //console.log(weekNumber, dayNumber, startCount, endCount);
        for (let i = startCount; i < endCount; i++) {
          episodeNumbersByNoOfVideosperday.push(i);
        }
        const videosForToday: CourseEpisodeType[] = [];
        episodeVideosArray.map((ep) => {
          return episodeNumbersByNoOfVideosperday.map((num) => {
            if (num.toString() === ep.episodeNumber.toString()) {
              videosForToday.push(ep);
            }
          });
        });

        return videosForToday;
      }
      case noOfVideosPerDay === 8: {
        if (dayNumber === 2) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber + 6;
        } else if (dayNumber === 3) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber + 13;
        } else if (dayNumber === 4) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber + 20;
        } else if (dayNumber === 5) {
          startCount =
            weekNumber * videosPerWeek - (videosPerWeek - 1) + dayNumber + 27;
        } else {
          startCount = weekNumber * videosPerWeek - (videosPerWeek - 1);
        }
        let endCount = startCount + noOfVideosPerDay;
        //console.log(weekNumber, dayNumber, startCount, endCount);
        for (let i = startCount; i < endCount; i++) {
          episodeNumbersByNoOfVideosperday.push(i);
        }
        const videosForToday: CourseEpisodeType[] = [];
        episodeVideosArray.map((ep) => {
          return episodeNumbersByNoOfVideosperday.map((num) => {
            if (num.toString() === ep.episodeNumber.toString()) {
              videosForToday.push(ep);
            }
          });
        });

        return videosForToday;
      }
      default:
        {
          if (dayNumber === 2) {
            startCount =
              weekNumber * videosPerWeek -
              (videosPerWeek - 1) +
              (dayNumber - 1);
          } else if (dayNumber === 3) {
            startCount =
              weekNumber * videosPerWeek -
              (videosPerWeek - 1) +
              (dayNumber - 1);
          } else if (dayNumber === 4) {
            startCount =
              weekNumber * videosPerWeek -
              (videosPerWeek - 1) +
              (dayNumber - 1);
          } else if (dayNumber === 5) {
            startCount =
              weekNumber * videosPerWeek -
              (videosPerWeek - 1) +
              (dayNumber - 1);
          } else {
            startCount = weekNumber * videosPerWeek - (videosPerWeek - 1);
          }
          let endCount = startCount + noOfVideosPerDay;

          for (let i = startCount; i < endCount; i++) {
            episodeNumbersByNoOfVideosperday.push(i);
          }
        }
        const videosForToday: CourseEpisodeType[] = [];
        episodeVideosArray.map((ep) => {
          return episodeNumbersByNoOfVideosperday.map((num) => {
            if (num.toString() === ep.episodeNumber.toString()) {
              videosForToday.push(ep);
            }
          });
        });

        return videosForToday;
    }
  };
  return (
    <Box maxWidth={"100%"}>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{`Week ${weekNumber}`}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          {/* interate for five day */}
          {[1, 2, 3, 4, 5].map((num) => (
            <DayAccordion
              key={num}
              dayNumber={num}
              videosForToday={episodesNumbers(num)}
              courseId={courseId}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
