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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { AttemptType } from "@/lib/types/user";
import { updateCourseDetails } from "@/store/slices/courseDetails";
import {
  StudentCourseDetailsT,
  StudentEpisodeAssignmentType,
} from "@/lib/types/studentsCourseDetails";
import { StudentCourseDetails } from "@/lib/classes/studentCourseDetails";
import SnackbarComponent from "../snackbar/SnackBar";
import { BlackAutocompleteFreeSolo } from "../form/BlackAutocompleteFreeSolo";
import { QuestionOption } from "@/lib/types/forms";
import { CourseEpisode } from "@/lib/classes/courseEpisode";
import { downloadFile } from "@/lib/functions/courseVideo";
import { BlackDivider } from "../drawers/DashboardMenuDrawer";
import InfoAlert from "../alerts/InfoAlerts";
import { useRouter } from "next/navigation";
import ErrorAlert from "../alerts/ErrorAlert";
import { Account } from "@/lib/classes/account";
import { updateUser } from "@/store/slices/userSlice";
import SuccessAlert from "../alerts/SuccessAlert";
import EpisodeprogressComponent from "../course-details/EpisodeprogressComponent";
import VideoComponent from "./VideoComponent";
import { attemptsJSON } from "@/lib/functions/user";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

//get attempts for this episode
const attempts: AttemptType = attemptsJSON() as AttemptType;
export default function CourseVideo({
  title,
  duration,
  assignment,
  downloadablePdf,
  quickTest,
  episodeNumber,
  courseId,
  assignmentLink,
  videoSrc,
}: CourseEpisodeType) {
  const user = useSelector((state: RootState) => state.users.user);
  const _id = user && user._id;
  useEffect(() => {
    if (attempts && attempts.studentId !== _id) {
      localStorage.removeItem("episodeAttempts");
    }
  }, [_id]);

  //get course details
  const courseDetails = useSelector(
    (state: RootState) => state.courseDetails.courseDetails
  );

  //check the student is elligible to take the next cass
  let canTakeThisLesson = true;

  if (courseDetails) {
    if (episodeNumber === 1) {
      canTakeThisLesson = true;
    } else {
      //check if the previous episode has a score
      const prevEpisodeScore =
        courseDetails.coursesTaken
          .find((course) => course.courseId === courseId)
          ?.episodes.find((ep) => ep.episodeNumber === episodeNumber - 1)
          ?.score ?? 0;

      if (prevEpisodeScore === 0) {
        canTakeThisLesson = false;
      } else {
        canTakeThisLesson = true;
      }
    }
  }
  if (user && !user.active)
    return (
      <Box minWidth={"100%"} maxWidth={"100%"}>
        <ErrorAlert message="You are not eligible to continue this course. You failed your last test three times" />
        <Box bgcolor={"whitesmoke"}>
          <Typography fontWeight={"bold"} variant="body2" m={2}>
            Contact your instructor
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <CallIcon />
            <Typography m={2}>09167704504</Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <WhatsAppIcon />
            <Typography m={2}>09167704504</Typography>
          </Box>
        </Box>
      </Box>
    );
  return (
    <>
      {canTakeThisLesson ? (
        <Box mb={5} maxWidth={"100%"}>
          <Typography mb={2} fontWeight={"bold"}>
            {`Lesson ${episodeNumber} - ${title} `}
          </Typography>
          <Typography mb={2} fontWeight={"bold"}>
            Duration: - {duration}
          </Typography>
          <VideoComponent src={videoSrc as string} />
          <Typography m={2}>Downloadable Materials</Typography>
          <Button
            sx={{ color: "blue" }}
            onClick={() => {
              downloadFile(
                `/episodePdf/${courseId}/Lesson-${episodeNumber}.pdf`
              );
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
          {/* <Assignment
        assignment={assignment}
        assignmentLink={assignmentLink}
        courseId={courseId as string}
        episodeNumber={episodeNumber}
      /> */}
          <Feedback
            courseId={courseId as string}
            episodeNumber={episodeNumber}
          />
          <PersonalQuestionsAndAnswers
            episodeNumber={episodeNumber}
            courseId={courseId as string}
          />{" "}
          {/* <EpisodeprogressComponent
            courseId={courseId as string}
            episodeNumber={episodeNumber}
          /> */}
          <BlackDivider />
          {/* <FAQ courseId={courseId as string} episodeNumber={episodeNumber} /> */}
        </Box>
      ) : (
        <InfoAlert message="You are not eligible to take this lesson. Complete the previous lesson" />
      )}
    </>
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
  const _id = useSelector((state: RootState) => state.users.user?._id);
  useEffect(() => {
    (async () => {
      if (_id) {
        const response = await CourseEpisode.getEpisodeArrayPropByStudent({
          studentId: _id,
          courseId,
          episodeNumber,
          prop: "studentsPersonalQuestions",
        });
        if (response.ok) {
          setQuestions(response.value);
        }
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
  const _id = useSelector((state: RootState) => state.users.user?._id);
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
          if (feedback) {
            setLoading(true);
            if (_id) {
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
          } else {
            setMsg("Feedback cannot be empty");
            setColor("error");
            const refState = snackBarRef.current as any;
            refState.handleClick();
          }
        }}
        sx={{ mt: 2, mb: 2, maxWidth: "100%" }}
        fullWidth
      >
        Submit Feedback
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
  const _id = useSelector((state: RootState) => state.users.user?._id);
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
            if (_id) {
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
        Submit Question
      </Button>
    </Box>
  );
}
function Assignment({
  assignment,
  courseId,
  episodeNumber,
  assignmentLink,
}: {
  assignment: string;
  assignmentLink: string;
  courseId: string;
  episodeNumber: number;
}) {
  //get student id
  const _id = useSelector((state: RootState) => state.users.user?._id);
  const courseDetails = useSelector(
    (state: RootState) => state.courseDetails.courseDetails
  );
  const [assignmentAns, setAssignmentAns] =
    useState<StudentEpisodeAssignmentType>({
      answer: "",
      grade: 0,
    });

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    (async () => {
      if (_id) {
        const data = await StudentCourseDetails.getStudentEpisodeAssignment({
          courseId,
          episodeNumber,
          studentId: _id,
        });
        if (data.ok) {
          setAssignmentAns(data.value);
        }
      }
    })();
  }, [_id, courseId, episodeNumber]);

  const [answer, setAnswer] = useState("");
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
      <Link href={assignmentLink ?? ""}>Assignment Material</Link>
      {assignmentAns.answer ? (
        <>
          {assignmentAns.answer && (
            <BlackDescription
              label="Your Answer"
              description={assignmentAns.answer}
            />
          )}
          {assignmentAns.answer && !assignmentAns.grade && (
            <InfoAlert message="Your assignment grade is on the way" />
          )}
          {assignmentAns.grade > 0 && assignmentAns.grade < 50 && (
            <ErrorAlert
              message={`Your assignment grade is ${assignmentAns.grade}.
               This is very poor. You can do better. Study your assignment again`}
            />
          )}
          {assignmentAns.grade > 49 && assignmentAns.grade < 70 && (
            <InfoAlert
              message={`Your assignment grade is ${assignmentAns.grade}.
               Good grade. But you can do better next time.`}
            />
          )}
          {assignmentAns.grade > 69 && assignmentAns.grade < 80 && (
            <SuccessAlert
              message={`Your assignment grade is ${assignmentAns.grade}.
               Great grade. But you can do better next time.`}
            />
          )}
          {assignmentAns.grade > 79 && (
            <SuccessAlert
              message={`Your assignment grade is ${assignmentAns.grade}.
               Excellent grade. You are a computer Wizard.`}
            />
          )}
        </>
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
              if (!answer) {
                setMsg("Your ansswer cannot be empty");
                setColor("error");
                const refState = snackBarRef.current as any;
                refState.handleClick();
                return;
              }
              setLoading(true);
              if (courseDetails) {
                if (_id) {
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
                }
              } else {
                const studentCourseDetails = new StudentCourseDetails();
                if (_id) {
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
              }
            }}
            sx={{ mt: 2, mb: 2, maxWidth: "100%" }}
            fullWidth
          >
            Submit Assignment
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
  const [attempt, setAttempt] = useState(attempts ? attempts.attempt : 0);
  const [questions, setQuestions] = useState<AssignmentQuestion[]>([]);
  const [showAns, setShowAns] = useState(false);
  const [answerObjs, setAnswerObjs] = useState<StudentAnswers[]>([]);
  const router = useRouter();
  //get student id
  const _id = useSelector((state: RootState) => state.users.user?._id);
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
      default: {
        setQuestions(quickTest.questions.slice(0, 10));
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
        if (_id) {
          const data = await StudentCourseDetails.getCourseDetails(_id);
          if (data.ok) {
            setStudentCourseDetails(data.value);
            dispatch(updateCourseDetails(data.value));
          }
        }
      }
    })();
  }, [_id, courseDetails, dispatch]);
  let score = 0;
  if (studentCourseDetails) {
    //get score answer
    score = studentCourseDetails.coursesTaken
      .find((course) => course.courseId === courseId)
      ?.episodes.find((ep) => ep.episodeNumber === episodeNumber)
      ?.score as number;
  }
  return (
    <Box maxHeight={"100%"}>
      <BlackDivider />
      {score ? (
        <SuccessAlert message={`Your test score is: ${score}`} />
      ) : (
        <>
          <Box bgcolor={"whitesmoke"}>
            <InfoAlert
              message={`Ensure you do your assignment because 40% of the quiz questions comes from the assignment material.You only have ${quickTest.repeatableTimes} attempts for this test. 
      Ensure you go through the lesson video and material thoroughly. If you fail this test ${quickTest.repeatableTimes} times, you will be out of this course`}
            />
            <Box display={"flex"} id="quickTest">
              <Typography m={2} variant="body2" fontWeight={"bold"}>
                {`Quick Test - (${quickTest.duration}mins)`}
              </Typography>
              {!start && attempt < 3 && (
                <Button
                  sx={{ fontWeight: "bold" }}
                  color="secondary"
                  onClick={() => {
                    setStart(true);
                    setAttempt((prev) => prev + 1);
                    setShowAns(false);

                    //update the attemp of this episode
                    //get the current episode
                    const episodeAttempts = {
                      episodeNumber,
                      attempt: attempt + 1,
                      studentId: _id,
                    };
                    localStorage.setItem(
                      "episodeAttempts",
                      JSON.stringify(episodeAttempts)
                    );
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
            <Typography p={1} color={"secondary"} m={1} fontWeight={"bold"}>
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
                      router.push("/dashboard/course-details/#quickTest");
                    }}
                  >
                    Try again
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
        </>
      )}
    </Box>
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
  const _id = useSelector((state: RootState) => state.users.user?._id);
  const courseDetails = useSelector(
    (state: RootState) =>
      state.courseDetails.courseDetails as StudentCourseDetailsT
  );
  const dispatch = useDispatch<AppDispatch>();

  const score = () => {
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
          if (_id) {
            const response = await StudentCourseDetails.upDateEpisode({
              studentId: _id,
              courseId,
              episodeNumber,
              updateParam: "score",
              value: score,
            });

            dispatch(updateCourseDetails(response.value));
          }
        } else {
          const studentCourseDetails = new StudentCourseDetails();
          if (_id) {
            const response = await studentCourseDetails.sendData({
              studentId: _id,
              courseId,
              episode: {
                episodeNumber,
                score,
              },
            });
            dispatch(updateCourseDetails(response.value));
            localStorage.removeItem("episodeAttempts");
          }
        }
      })();
    } else {
      if (attempt === 3) {
        (async () => {
          if (_id) {
            const response = await Account.deactivateStudent({ _id });
            if (response.ok) {
              dispatch(updateUser(response.value));
              localStorage.removeItem("episodeAttempts");
            }
          }
        })();
      }
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
