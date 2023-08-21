import {
  Box,
  CardActions,
  CardContent,
  CardHeader,
  Rating,
  TextField,
  Typography,
  AlertColor,
  Button,
  Backdrop,
  CircularProgress,
  Divider,
  Avatar,
  IconButton,
  Badge,
} from "@mui/material";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { number, object, string } from "yup";
import SnackbarComponent from "./snackbars/Snackbar";
import { useRef, useState, useEffect } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import InfoAlert from "./alerts/Info";

type CommentObj = {
  comment: string;
  rating: number;
  subject: string;
  userId?: string;
  _id?: string;
  fullName: string;
  likes?: number;
  disLikes?: number;
  replies?: CommentReplyObj[];
};
type CommentReplyObj = {
  comment: string;
  likes: number;
  disLikes: number;
  _id?: string;
  userId: string;
};
type ReplyCommentObj = {
  reply: string;
  commentId: string;
};
function Comments({ title, subject }: { subject: string; title: string }) {
  //snackbar values
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState<AlertColor>("error");
  //declare refs
  const snackBarRef = useRef();

  //form values
  let initialValues: CommentObj = {
    comment: "",
    rating: 0,
    subject,
    fullName: "",
  };
  const validationSchema = object({
    comment: string().required("Comment is required"),
    fullName: string().required("Your name is required"),
    rating: number().min(1, "Rating is required"),
  });

  //formik submit handler
  const formikSubmitHandler = (values: any, formikHelpers: any) => {
    return new Promise((res) => {
      formikHelpers
        .validateForm()
        .then(async (data: any) => {
          try {
            const result = await axios({
              method: "POST",
              url: `${process.env.BWT_URL}api/users/comment`,
              data: values,
            });
            const data = await result.data;
            if (data.successful) {
              formikHelpers.setTouched({});
              formikHelpers.setValues({
                comment: "",
                rating: 0,
                subject,
                fullName: "",
              });
              displaySnacbarMessage(
                setMsg,
                setColor,
                snackBarRef,
                data.message,
                "success"
              );
              res("");
            } else {
              displaySnacbarMessage(
                setMsg,
                setColor,
                snackBarRef,
                data.message,
                "error"
              );
              res("");
            }
          } catch (err: any) {
            console.log(err);
            displaySnacbarMessage(
              setMsg,
              setColor,
              snackBarRef,
              err.response.data.message,
              "error"
            );
            res("");
          }
        })
        .catch((err: any) => {
          displaySnacbarMessage(
            setMsg,
            setColor,
            snackBarRef,
            err.message,
            "error"
          );
          res(err);
        });
    });
  };

  return (
    <Box sx={{ maxWidth: { xs: "100%", md: "70%" } }}>
      <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
      <CardHeader title={title} />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={formikSubmitHandler}
      >
        {({ isSubmitting, isValidating }) => (
          <Form>
            {" "}
            <CardContent>
              <Box mb={5}>
                <Field
                  as={TextField}
                  label="Your full name"
                  fullWidth
                  name="fullName"
                  helperText="Please give us your names"
                />

                <BlackErrorMessage name="fullName" />
              </Box>
              <Box mb={5}>
                <Field
                  as={TextField}
                  label="Your comment"
                  fullWidth
                  multiline
                  name="comment"
                  helperText="Please tell us what you think about this course"
                />

                <BlackErrorMessage name="comment" />
              </Box>
              <Box>
                <Typography variant="caption" component={"p"}>
                  Rate this course
                </Typography>
                <Field as={Rating} precision={0.5} name="rating" />
                <BlackErrorMessage name="rating" />
              </Box>
            </CardContent>
            <CardActions>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={isSubmitting}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting || isValidating}
              >
                Submit
              </Button>
            </CardActions>{" "}
            {/* <pre>{JSON.stringify(values, null, 4)}</pre>
            <pre>{JSON.stringify(errors, null, 4)}</pre> */}
          </Form>
        )}
      </Formik>
      <Box mt={5}>
        <Typography mb={2}>Reviews:</Typography>
        <AllComments subject={subject} />
      </Box>
    </Box>
  );
}

export default Comments;

function AllComments({ subject }: { subject: string }) {
  const [comments, setComments] = useState<CommentObj[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `${process.env.BWT_URL}api/comment/${subject}`,
        });
        const data = await res.data;
        setComments(data);
      } catch (err) {
        console.log(err);
      }
    })();
  });
  if (!comments) return <p></p>;
  if (Array.isArray(comments) && comments.length == 0)
    return <InfoAlert message="No reviews. Be the first to review" />;
  return (
    <Box>
      {Array.isArray(comments) &&
        comments.map((comment) => (
          <Comment key={comment && comment._id} comment={comment} />
        ))}
    </Box>
  );
}

function ReplyForm({ commentId }: { commentId: string }) {
  //snackbar values
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState<AlertColor>("error");
  //declare refs
  const snackBarRef = useRef();
  //form values
  let initialValues: ReplyCommentObj = {
    reply: "",
    commentId,
  };
  const validationSchema = object({
    reply: string().required("Your reply is required"),
  });

  //formik submit handler
  const formikSubmitHandler = (values: any, formikHelpers: any) => {
    return new Promise((res) => {
      formikHelpers
        .validateForm()
        .then(async (data: any) => {
          try {
            const result = await axios({
              method: "POST",
              url: `${process.env.BWT_URL}api/comment/reply`,
              data: values,
            });
            const data = await result.data;
            if (data.successful) {
              formikHelpers.setTouched({});
              formikHelpers.setValues({
                reply: "",
              });
              displaySnacbarMessage(
                setMsg,
                setColor,
                snackBarRef,
                data.message,
                "success"
              );
              res("");
            } else {
              displaySnacbarMessage(
                setMsg,
                setColor,
                snackBarRef,
                data.message,
                "error"
              );
              res("");
            }
          } catch (err: any) {
            console.log(err);
            displaySnacbarMessage(
              setMsg,
              setColor,
              snackBarRef,
              err.message,
              "error"
            );
            res("");
          }
        })
        .catch((err: any) => {
          displaySnacbarMessage(
            setMsg,
            setColor,
            snackBarRef,
            err.response.data.message,
            "error"
          );
          res(err);
        });
    });
  };
  return (
    <Box mt={2} mb={2}>
      <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={formikSubmitHandler}
      >
        {({ isSubmitting, isValidating, isValid }) => (
          <Form>
            <Field
              as={TextField}
              label="reply this comment"
              fullWidth
              multiline
              name="reply"
              helperText="What do you think about this comment"
            />

            <Button
              sx={{ textTransform: "lowercase", mt: 2, ml: 2 }}
              variant="contained"
              size="small"
              type="submit"
              disabled={isSubmitting || isValidating || !isValid}
            >
              send
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

function BlackErrorMessage({ name }: { name: string }) {
  return (
    <Box color={"red"}>
      <ErrorMessage name={name} />
    </Box>
  );
}

async function likeAcomment(commentId: string, like: boolean) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.BWT_URL}api/comment/like`,
      data: { commentId, like },
    });
  } catch (err) {
    console.log(err);
  }
}
async function disLikeAcomment(commentId: string, disLike: boolean) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.BWT_URL}api/comment/dislike`,
      data: { commentId, disLike },
    });
  } catch (err) {
    console.log(err);
  }
}

function displaySnacbarMessage(
  setMsg: any,
  setColor: any,
  snackBarRef: any,
  msg: string,
  color: AlertColor
) {
  setMsg(msg);
  setColor(color);
  const refState = snackBarRef.current as any;
  refState.handleClick();
}
function Comment({ comment }: { comment: CommentObj }) {
  const [like, setLike] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [disLike, setDisLike] = useState(true);
  const [disLikeCount, setDisLikeCount] = useState(0);
  if (!comment) return <p></p>;
  return (
    <Box mb={3} bgcolor={"whitesmoke"}>
      <CardHeader
        avatar={<Avatar sx={{ width: 70, height: 70 }} />}
        title={comment.fullName}
        subheader={
          <Box mt={2}>
            <Rating readOnly value={comment.rating} size="small" />
            <br></br>
            <Typography variant="caption" maxWidth={"100%"}>
              {comment.comment}
            </Typography>
          </Box>
        }
      />
      <Box mt={2}>
        <Badge badgeContent={comment.likes} color="primary" sx={{ mr: 5 }}>
          <IconButton
            disabled={likeCount > 1}
            onClick={() => {
              setLike(false);
              setLikeCount(likeCount + 1);
              likeAcomment(comment._id ?? "", like);
            }}
          >
            <ThumbUpAltIcon />
          </IconButton>{" "}
        </Badge>

        <Badge badgeContent={comment.disLikes} color="primary">
          <IconButton
            disabled={disLikeCount > 1}
            onClick={() => {
              setDisLike(false);
              setDisLikeCount(disLikeCount + 1);
              disLikeAcomment(comment._id ?? "", disLike);
            }}
          >
            <ThumbDownIcon />
          </IconButton>{" "}
        </Badge>
        <ReplyForm commentId={comment._id ?? ""} />
      </Box>

      <Box ml={5} mb={3}>
        <Typography>Replies</Typography>
        {Array.isArray(comment.replies) && comment.replies.length == 0 && (
          <InfoAlert message="No replies. Be the first to reply" />
        )}

        {Array.isArray(comment.replies) &&
          comment.replies.length > 0 &&
          comment.replies.map((reply) => (
            <Reply reply={reply} key={reply && reply._id} />
          ))}
      </Box>
      <Divider />
    </Box>
  );
}

function Reply({ reply }: { reply: CommentReplyObj }) {
  const [like, setLike] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [disLike, setDisLike] = useState(true);
  const [disLikeCount, setDisLikeCount] = useState(0);
  if (!reply) return <p></p>;
  return (
    <Box>
      <CardHeader
        avatar={<Avatar sx={{ width: 50, height: 50 }} />}
        title={"Anonymous"}
        subheader={
          <Box mt={2}>
            <Typography variant="caption" maxWidth={"100%"}>
              {reply.comment}
            </Typography>
          </Box>
        }
      />
      <Box mt={2} ml={5}>
        <Badge badgeContent={reply.likes} color="primary" sx={{ mr: 5 }}>
          <IconButton
            disabled={likeCount > 1}
            onClick={() => {
              setLike(false);
              setLikeCount(likeCount + 1);
              likeAReply(reply._id ?? "", like);
            }}
          >
            <ThumbUpAltIcon />
          </IconButton>{" "}
        </Badge>

        <Badge badgeContent={reply.disLikes} color="primary">
          <IconButton
            disabled={disLikeCount > 1}
            onClick={() => {
              setDisLike(false);
              setDisLikeCount(disLikeCount + 1);
              disLikeAReply(reply._id ?? "", disLike);
            }}
          >
            <ThumbDownIcon />
          </IconButton>{" "}
        </Badge>
        <ReplyForm commentId={reply._id ?? ""} />
      </Box>
    </Box>
  );
}
async function likeAReply(commentId: string, like: boolean) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.BWT_URL}api/reply/like`,
      data: { commentId, like },
    });
  } catch (err) {
    console.log(err);
  }
}
async function disLikeAReply(commentId: string, disLike: boolean) {
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.BWT_URL}api/reply/dislike`,
      data: { commentId, disLike },
    });
  } catch (err) {
    console.log(err);
  }
}
