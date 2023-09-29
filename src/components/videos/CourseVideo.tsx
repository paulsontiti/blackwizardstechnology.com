"use client";
import { Box, Typography, Button, TextField, AlertColor } from "@mui/material";
import { BlackDescription } from "../styledComponents/BlackDescription";
import {
  AssignmentQuestion,
  CourseEpisodeType,
  Question,
  QuickTest,
} from "@/lib/types/course";
import AssignmentQuestionOptions from "../radioButtonGroup/AssignmentQuestionOptions";
import { useEffect, useRef, useState } from "react";
import { theme } from "@/app/layout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { UserType } from "@/lib/types/user";
import { updateCourseDetails } from "@/store/slices/courseDetails";
import { StudentCourseDetailsT } from "@/lib/types/studentsCourseDetails";
import { StudentCourseDetails } from "@/lib/classes/studentCourseDetails";
import SnackbarComponent from "../snackbar/SnackBar";
import { BlackAutocompleteFreeSolo } from "../form/BlackAutocompleteFreeSolo";
import { QuestionOption } from "@/lib/types/forms";
import { CourseEpisode } from "@/lib/classes/courseEpisode";
import { downloadFile } from "@/lib/functions/courseVideo";
import { BlackDivider } from "../drawers/DashboardMenuDrawer";

export default function CourseVideo({
  title,
  duration,
  assignment,
  downloadablePdf,
  quickTest,
  episodeNumber,
  courseId,
  videoSrc,
}: CourseEpisodeType) {
  return (
    <Box mb={5}>
      <Typography mb={2} fontWeight={"bold"}>
        {`Lesson ${episodeNumber} - ${title} `}
      </Typography>
      <Typography mb={2} fontWeight={"bold"}>
        Duration: - {duration}
      </Typography>
      <video controls controlsList="nodownload" width={"100%"}>
        <source src={videoSrc} type="video/mp4" />
      </video>{" "}
      <BlackDivider />
      <Typography m={2}>Downloadable Materials</Typography>
      <Button
        sx={{ color: "blue" }}
        onClick={() => {
          downloadFile(`/episodePdf/${courseId}/Lesson-${episodeNumber}.pdf`);
        }}
      >
        {downloadablePdf}
      </Button>
      <QuickTest
        quickTest={quickTest}
        episodeNumber={episodeNumber}
        courseId={courseId as string}
      />{" "}
      <AskQuestion
        episodeNumber={episodeNumber}
        courseId={courseId as string}
      />{" "}
      <Assignment
        assignment={assignment}
        courseId={courseId as string}
        episodeNumber={episodeNumber}
      />
      <Feedback courseId={courseId as string} episodeNumber={episodeNumber} />
      {/* <PersonalQuestionsAndAnswers
        episodeNumber={episodeNumber}
        courseId={courseId as string}
      />{" "}
      <FAQ courseId={courseId as string} episodeNumber={episodeNumber} /> */}
    </Box>
  );
}

function FAQ({
  courseId,
  episodeNumber,
}: {
  courseId: string;
  episodeNumber: number;
}) {
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    (async () => {
      const response = await CourseEpisode.getEpisodeQuestions({
        courseId,
        episodeNumber,
      });

      setQuestions(response.value);
    })();
  }, [courseId, episodeNumber, questions]);
  if (questions.length === 0) return <p></p>;

  return (
    <Box>
      {" "}
      <BlackDivider />
      <Typography mb={1} mt={2} fontWeight={"bold"}>
        Frequently Asked Questions and Answers
      </Typography>
      {questions.map((que) => (
        <BlackDescription
          key={que.answer}
          label={que.question}
          description={que.answer}
        />
      ))}
    </Box>
  );
}
function PersonalQuestionsAndAnswers({
  courseId,
  episodeNumber,
}: {
  courseId: string;
  episodeNumber: number;
}) {
  const [questions, setQuestions] = useState<Question[]>([]);
  //get student id
  const { _id } = useSelector(
    (state: RootState) => state.users.user as UserType
  );
  useEffect(() => {
    (async () => {
      const response = await CourseEpisode.getEpisodeArrayPropByStudent({
        studentId: _id,
        courseId,
        episodeNumber,
        prop: "studentsPersonalQuestions",
      });
      if (response.ok) {
        setQuestions(response.value);
      }
    })();
  }, [_id, courseId, episodeNumber]);

  if (questions.length < 1) return <p></p>;
  return (
    <>
      {" "}
      <BlackDivider />
      <Typography mb={1} mt={2} fontWeight={"bold"}>
        Previous Questions and Answers
      </Typography>
      {questions.map((que) => (
        <Box key={que.answer} mb={2}>
          <BlackDescription label={que.question} description={que.answer} />
        </Box>
      ))}
    </>
  );
}
function Feedback({
  courseId,
  episodeNumber,
}: {
  courseId: string;
  episodeNumber: number;
}) {
  //get student id
  const { _id } = useSelector(
    (state: RootState) => state.users.user as UserType
  );
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  //for snackbar
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState<AlertColor>("error");

  //snackbar ref
  const snackBarRef = useRef();
  return (
    <Box display={"flex"} flexDirection={"column"}>
      {" "}
      <BlackDivider />
      <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
      <Typography m={2} variant="body2" fontWeight={"bold"}>
        Tell us how we can serve you better?
      </Typography>
      <TextField
        multiline
        rows={4}
        onChange={(e: any) => {
          setFeedback(e.target.value);
        }}
        fullWidth
        placeholder="Tell us about your concerns"
        helperText="We need your feedback to serve you better"
      />
      <Button
        disabled={loading}
        variant="contained"
        onClick={async () => {
          setLoading(true);
          if (feedback) {
            const response = await CourseEpisode.upDateEpisodeFeedbacks({
              studentId: _id,
              courseId,
              episodeNumber,
              value: feedback,
            });
            setLoading(false);
            setFeedback("");
            if (response.ok) {
              setMsg(
                "Your feedback was successfully submitted. Thanks for sharing your thoughts"
              );
              setColor("success");
              const refState = snackBarRef.current as any;
              refState.handleClick();
            } else {
              setMsg(response.error);
              setColor("error");
              const refState = snackBarRef.current as any;
              refState.handleClick();
            }
          }
        }}
        sx={{ mt: 2, mb: 2, maxWidth: "100%" }}
        fullWidth
      >
        Submit
      </Button>
    </Box>
  );
}

function AskQuestion({
  courseId,
  episodeNumber,
}: {
  courseId: string;
  episodeNumber: number;
}) {
  //get student id
  const { _id } = useSelector(
    (state: RootState) => state.users.user as UserType
  );
  const [options, setOptions] = useState<QuestionOption[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  //for snackbar
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState<AlertColor>("error");

  //snackbar ref
  const snackBarRef = useRef();
  useEffect(() => {
    (async () => {
      const data = await CourseEpisode.getEpisodeQuestions({
        courseId,
        episodeNumber,
      });
      setOptions(data.value);
    })();
  }, [courseId, episodeNumber]);
  return (
    <Box display={"flex"} flexDirection={"column"}>
      {" "}
      <BlackDivider />{" "}
      <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
      <Typography m={2} variant="body2" fontWeight={"bold"}>
        Do you have any questions?
      </Typography>
      <BlackAutocompleteFreeSolo
        label="What is your question"
        placeholder="please hit the enter key after typing"
        value={question}
        helperText="Select option that match your question"
        options={options}
        onChange={(newValue: string | null) => {
          setQuestion(newValue ?? "");
        }}
      />
      <Button
        disabled={loading}
        variant="contained"
        onClick={async () => {
          if (question) {
            setLoading(true);
            const response = await CourseEpisode.upDateEpisodeQuestions({
              courseId,
              episodeNumber,
              value: question,
              studentId: _id,
            });
            setLoading(false);
            setQuestion("");
            if (response.ok) {
              setMsg("Your question was successfully submitted");
              setColor("success");
              const refState = snackBarRef.current as any;
              refState.handleClick();
            } else {
              setMsg(response.error);
              setColor("error");
              const refState = snackBarRef.current as any;
              refState.handleClick();
            }
          } else {
            setMsg(
              "No question found. Please hit your enter button/key after typing your question before submitting"
            );
            setColor("error");
            const refState = snackBarRef.current as any;
            refState.handleClick();
          }
        }}
        sx={{ mt: 2, mb: 2, maxWidth: "100%" }}
        fullWidth
      >
        Submit
      </Button>
    </Box>
  );
}
function Assignment({
  assignment,
  courseId,
  episodeNumber,
}: {
  assignment: string;
  courseId: string;
  episodeNumber: number;
}) {
  //get student id
  const { _id } = useSelector(
    (state: RootState) => state.users.user as UserType
  );
  //get course details
  const courseDetails = useSelector(
    (state: RootState) =>
      state.courseDetails.courseDetails as StudentCourseDetailsT
  );

  const [studentCourseDetails, setStudentCourseDetails] =
    useState<StudentCourseDetailsT | null>(courseDetails);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    (async () => {
      if (!courseDetails) {
        const data = await StudentCourseDetails.getCourseDetails(_id);
        if (data.ok) {
          setStudentCourseDetails(data.value);
          dispatch(updateCourseDetails(data.value));
        }
      }
    })();
  }, [_id, dispatch, courseDetails]);

  let assignmentAns = "";
  if (studentCourseDetails) {
    //get assignment answer
    assignmentAns = studentCourseDetails.coursesTaken
      .find((course) => course.courseId === courseId)
      ?.episodes.find((ep) => ep.episodeNumber === episodeNumber)
      ?.assignment as string;
  }
  const [answer, setAnswer] = useState(assignmentAns);
  const [loading, setLoading] = useState(false);

  //for snackbar
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState<AlertColor>("error");

  //snackbar ref
  const snackBarRef = useRef();
  return (
    <Box>
      {" "}
      <BlackDivider />
      <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
      <BlackDescription label="Assignment" description={assignment} />
      {assignmentAns ? (
        <BlackDescription label="Your Answer" description={assignmentAns} />
      ) : (
        <Box display={"flex"} flexDirection={"column"}>
          <Typography m={2} variant="body2" fontWeight={"bold"}>
            Submit your assignment
          </Typography>
          <TextField
            multiline
            rows={4}
            onChange={(e: any) => {
              setAnswer(e.target.value);
            }}
            fullWidth
            placeholder="Type you assignment here"
            helperText="Assignments help you become better"
          />
          <Button
            disabled={loading}
            variant="contained"
            onClick={async () => {
              setLoading(true);
              if (courseDetails) {
                const response = await StudentCourseDetails.upDateEpisode({
                  studentId: _id,
                  courseId,
                  episodeNumber,
                  updateParam: "assignment",
                  value: answer,
                });
                if (response.ok) {
                  setLoading(false);
                  setMsg("Your assignment was successfully submitted");
                  setColor("success");
                  const refState = snackBarRef.current as any;
                  refState.handleClick();
                } else {
                  setLoading(false);
                  setMsg(response.error);
                  setColor("error");
                  const refState = snackBarRef.current as any;
                  refState.handleClick();
                }
                dispatch(updateCourseDetails(response.value));
              } else {
                const studentCourseDetails = new StudentCourseDetails();
                const response = await studentCourseDetails.sendData({
                  studentId: _id,
                  courseId,
                  episode: {
                    episodeNumber,
                    assignmentAns,
                  },
                });
                dispatch(updateCourseDetails(response.value));
              }
            }}
            sx={{ mt: 2, mb: 2, maxWidth: "100%" }}
            fullWidth
          >
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
}

type StudentAnswers = {
  answer: string;
  question: string;
  questionAnswer: string;
};

function QuickTest({
  quickTest,
  episodeNumber,
  courseId,
}: {
  quickTest: QuickTest;
  episodeNumber: number;
  courseId: string;
}) {
  const [start, setStart] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [questions, setQuestions] = useState<AssignmentQuestion[]>([]);
  const [showAns, setShowAns] = useState(false);
  const [answerObjs, setAnswerObjs] = useState<StudentAnswers[]>([]);
  //get student id
  const { _id } = useSelector(
    (state: RootState) => state.users.user as UserType
  );
  useEffect(() => {
    switch (attempt) {
      case 1: {
        setQuestions(quickTest.questions.slice(0, 10));
        return;
      }
      case 2: {
        setQuestions(quickTest.questions.slice(10, 20));
        return;
      }
      case 3: {
        setQuestions(quickTest.questions.slice(20, 30));
        return;
      }
    }
  }, [attempt, quickTest]);

  const handleAnswer: any = (
    answer: string,
    question: string,
    questionAnswer: string
  ) => {
    const obj = answerObjs.find((obj) => obj.question === question);
    if (!obj) {
      setAnswerObjs((prev) => [...prev, { answer, question, questionAnswer }]);
    } else {
      setAnswerObjs((prev) =>
        prev.filter((object) => object.question !== obj.question)
      );
      setAnswerObjs((prev) => [...prev, { answer, question, questionAnswer }]);
    }
  };
  //get course details
  const courseDetails = useSelector(
    (state: RootState) =>
      state.courseDetails.courseDetails as StudentCourseDetailsT
  );

  const [studentCourseDetails, setStudentCourseDetails] =
    useState<StudentCourseDetailsT | null>(courseDetails);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      if (!courseDetails) {
        const data = await StudentCourseDetails.getCourseDetails(_id);
        if (data.ok) {
          setStudentCourseDetails(data.value);
          dispatch(updateCourseDetails(data.value));
        }
      }
    })();
  });

  let score = 0;
  if (studentCourseDetails) {
    //get score answer
    score = studentCourseDetails.coursesTaken
      .find((course) => course.courseId === courseId)
      ?.episodes.find((ep) => ep.episodeNumber === episodeNumber)
      ?.score as number;
  }
  return (
    <>
      {!score && (
        <Box bgcolor={theme.bwt[200]}>
          {" "}
          <BlackDivider />
          <Box display={"flex"}>
            <Typography m={2} variant="body2" fontWeight={"bold"}>
              {`Quick Test - (${quickTest.duration}mins)`}
            </Typography>

            {!start && (
              <Button
                sx={{ fontWeight: "bold" }}
                color="secondary"
                onClick={() => {
                  setStart(true);
                  setAttempt((prev) => prev + 1);
                  setShowAns(false);
                }}
              >
                Start
              </Button>
            )}
          </Box>
          <Typography p={1}>{`Pass mark : ${quickTest.passMark}`}</Typography>
          <Typography
            p={1}
          >{`Repeat times : ${quickTest.repeatableTimes}`}</Typography>
          <Typography p={1} color={"secondary"} m={2} fontWeight={"bold"}>
            {attempt > 0 &&
              attempt <= 3 &&
              `${quickTest.repeatableTimes - attempt} attempt${
                quickTest.repeatableTimes - attempt > 1 ? "s" : ""
              } left`}
          </Typography>
          {start && (
            <Timer duration={quickTest.duration} setShowAns={setShowAns} />
          )}
          {start && (
            <ol>
              {questions.map((que, i) => (
                <li key={i}>
                  <AssignmentQuestionOptions
                    showAnswer={showAns}
                    que={que}
                    handleAnswer={handleAnswer}
                  />
                </li>
              ))}
            </ol>
          )}
          {showAns && start && (
            <Result
              answerObjs={answerObjs}
              episodeNumber={episodeNumber}
              courseId={courseId}
              passMark={quickTest.passMark}
              attempt={attempt}
              component={
                <Button
                  sx={{ fontWeight: "bold" }}
                  color="secondary"
                  onClick={() => {
                    setStart(false);
                    setAnswerObjs([]);
                  }}
                >
                  Start
                </Button>
              }
            />
          )}
          {start && (
            <Button
              disabled={showAns}
              fullWidth
              sx={{ m: 2, maxWidth: "80%" }}
              variant="contained"
              onClick={() => {
                setShowAns(true);
              }}
            >
              Submit Your Answers
            </Button>
          )}
        </Box>
      )}
    </>
  );
}
function Result({
  answerObjs,
  component,
  attempt,
  passMark,
  courseId,
  episodeNumber,
}: {
  answerObjs: StudentAnswers[];
  courseId: string;
  episodeNumber: number;
  component: any;
  passMark: number;
  attempt: number;
}) {
  //get student id
  const { _id } = useSelector(
    (state: RootState) => state.users.user as UserType
  );
  const courseDetails = useSelector(
    (state: RootState) =>
      state.courseDetails.courseDetails as StudentCourseDetailsT
  );
  const dispatch = useDispatch<AppDispatch>();

  const score = () => {
    //update the attemp of this episode
    //get the current episode
    const episodeAttempts = {
      episodeNumber,
      attempt,
    };
    localStorage.setItem("episodeAttempts", JSON.stringify(episodeAttempts));

    //score the test
    let score = 0;
    for (let obj of answerObjs) {
      if (obj.answer === obj.questionAnswer) {
        score += 10;
      }
    }
    if (score >= passMark) {
      (async () => {
        if (courseDetails) {
          const response = await StudentCourseDetails.upDateEpisode({
            studentId: _id,
            courseId,
            episodeNumber,
            updateParam: "score",
            value: score,
          });

          dispatch(updateCourseDetails(response.value));
        } else {
          const studentCourseDetails = new StudentCourseDetails();
          const response = await studentCourseDetails.sendData({
            studentId: _id,
            courseId,
            episode: {
              episodeNumber,
              score,
            },
          });
          dispatch(updateCourseDetails(response.value));
        }
      })();
    }
    return score;
  };
  return (
    <Box p={2}>
      {" "}
      <BlackDivider />
      <Typography>{`Your score is ${score()}`}</Typography>
      {score() < passMark ? (
        <Box>
          {attempt < 3 ? (
            <>
              <Typography>
                Your score is poor, please go through the course video and pdf
                material and try again
              </Typography>
              {component}
            </>
          ) : (
            <Typography>
              Your score is poor, your attempts are exhausted. Your account have
              been deactivated. You cannot continue with this course. Contact
              admin for counselling
            </Typography>
          )}
        </Box>
      ) : (
        <Typography>
          Congratulations!!! You have a step to becoming a Sotfware Engineering
          Wizard
        </Typography>
      )}
    </Box>
  );
}
function Timer({
  duration,
  setShowAns,
}: {
  duration: number;
  setShowAns: (value: boolean) => void;
}) {
  const [timeLeft, setTimeLeft] = useState(duration);
  useEffect(() => {
    if (timeLeft >= 1) {
      setTimeout(() => {
        setTimeLeft((prv: number) => prv - 1);
      }, 60000);
    }
    if (timeLeft === 0) {
      setShowAns(true);
    }
  }, [timeLeft, setShowAns]);
  return (
    <Typography color={"secondary"} m={2} fontWeight={"bold"}>
      {timeLeft > 0 && `${timeLeft} min${timeLeft > 1 ? "s" : ""} left`}
    </Typography>
  );
}
