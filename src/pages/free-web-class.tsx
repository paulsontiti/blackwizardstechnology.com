// import RootLayout from "@/app/layout";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardHeader,
//   CardActions,
//   Rating,
//   Typography,
//   Button,
// } from "@mui/material";
// import Link from "next/link";
// import React from "react";
// import DoneIcon from "@mui/icons-material/Done";
// import LockClockIcon from "@mui/icons-material/LockClock";
// import { useRouter } from "next/router";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import ClockCountDown from "@/components/ClockCountDown";

// const FreeWebDevelopmentClass = () => {
//   const router = useRouter();
//   return (
//     <RootLayout>
//       <Box
//         bgcolor={"black"}
//         color={"white"}
//         pt={15}
//         pl={{ xs: 1, sm: 5 }}
//         mb={10}
//       >
//         <Box
//           maxWidth={{ xs: 300, sm: 600 }}
//           ml={{ md: 20 }}
//           display={"flex"}
//           justifyContent={"center"}
//           flexDirection={"column"}
//           mb={5}
//         >
//           <Box mb={5}>
//             <Typography mt={2} variant="h6" color={"orange"}>
//               {" "}
//               Free Web Development Course
//             </Typography>
//             <Typography>{`A one week class to show you how websites and web applications are created.`}</Typography>
//           </Box>
//           <Typography mb={2}>
//             On completion of this course, you are going to understand how
//             websites and web applications are developed. You are going to be
//             familiar with HTML, CSS and Javascript.
//           </Typography>
//           <Box display={"flex"} alignItems={"center"} mb={1}>
//             <Rating
//               name="half-rating-read"
//               size="small"
//               value={4.5}
//               precision={0.5}
//               readOnly
//             />
//             <Typography component={"span"}>{`(100 ratings)`}</Typography>
//             <Typography component={"span"} ml={1}>
//               100 students
//             </Typography>
//           </Box>
//           <Box display={"flex"} alignItems={"center"}>
//             <Typography component={"span"} mr={1}>
//               Created by{" "}
//             </Typography>
//             <Link href={"/"}>Black Wizards Technology</Link>
//           </Box>
//           <Card sx={{ mt: 5 }}>
//             <CardHeader
//               title="Free"
//               subheader={
//                 <Box>
//                   <Box display={"flex"}>
//                     <DateRangeIcon />
//                     <Typography ml={1}>
//                       August 14,2023 - August 21,2023
//                     </Typography>
//                   </Box>
//                   <ClockCountDown endDate={new Date("2023,08,14")} />
//                 </Box>
//               }
//             />

//             <CardActions
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexDirection: { xs: "column", sm: "row" },
//               }}
//             >
//               <Button
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                   bgcolor: "black",
//                   color: "orange",
//                   mb: 2,
//                 }}
//                 onClick={() => {
//                   router.push(
//                     "/questionnaire/course-sign-up?course=free-web-class"
//                   );
//                 }}
//               >
//                 Sign Up
//               </Button>
//               {/* <Button
//                 fullWidth
//                 variant="outlined"
//                 sx={{
//                   color: "orange",
//                   mb: 2,
//                 }}
//                 onClick={() => {
//                   router.push("/login");
//                 }}
//               >
//                 Login
//               </Button> */}
//             </CardActions>
//           </Card>
//         </Box>
//       </Box>
//     </RootLayout>
//   );
// };

// export default FreeWebDevelopmentClass;
// export function WebDevelopmentCourseDescription() {
//   return (
//     <Box p={3}>
//       <Typography>
//         Web development refers to the process of creating websites or web
//         applications that are accessed over the internet. It involves the use of
//         various technologies, programming languages, and tools to build the
//         front-end (client-side) and back-end (server-side) components of a web
//         application.
//       </Typography>
//       <Typography component={"p"}>
//         It is a dynamic and ever-evolving field. Staying up-to-date with the
//         latest web technologies, trends, and best practices is essential for
//         building modern, responsive, and secure web applications.
//       </Typography>
//       <Typography component={"p"}>
//         Here we shall have an overview of the key aspects of web development
//         some of which include: HTML, CSS, SSL, Databases, web APIs and Services.
//         Etc.
//       </Typography>
//       <Typography component={"p"}>
//         In this course you will learn all that is needed to make you an expert
//         in Web development. You will learn how to structure a website with HTML,
//         style it with CSS and make it interactive with Javascript.
//       </Typography>
//       <Typography component={"p"}>
//         You will also learn how to make your website user-friendly by
//         undestanding the best principles of User Interface, User Experience and
//         Graphics.
//       </Typography>
//       <Typography component={"p"}>
//         After understanding the basics of HTML, CSS and Javascript, you will
//         learn how the internet works in terms of client/server request and
//         responses. Then you will learn more advanced technology like libraries
//         and frameworks with ReactJs and NextJs.
//       </Typography>
//       <Typography component={"p"}>
//         You will get to understand how databases and web applications work
//         together in order to get data from users, store data, update, delete and
//         read data with MongoDb.
//       </Typography>
//       <Typography component={"p"}>
//         You will end the course by learning how Github works and hosting your
//         website on Vercel.
//       </Typography>
//       <Typography component={"p"}>
//         This is a 12 months course and you will be guided from the basics to the
//         advanced level. On completion of the course, Black Wizards Technology
//         will offer job to their best students.
//       </Typography>
//     </Box>
//   );
// }
import RootLayout from "@/app/layout";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
  TextField,
  AlertColor,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useRef, useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { string, object } from "yup";
import SnackbarComponent from "@/components/snackbars/Snackbar";
import { useRouter } from "next/router";
import axios from "axios";

const FreeClass = () => {
  const router = useRouter();
  const destUrl = router.query.destUrl as string;
  const course = router.query.course as string;
  return (
    <RootLayout>
      <Container sx={{ mt: 10, mb: 10, width: "100%" }}>
        <Typography variant="h6" mb={2}>
          Welcome to a 2 weeks free course on web development
        </Typography>

        <Questionnaire destUrl={`${destUrl}?course=${course}`} />
      </Container>
    </RootLayout>
  );
};

export default FreeClass;

function Questionnaire({ destUrl }: { destUrl: string }) {
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState<AlertColor>("error");
  //declare refs
  const snackBarRef = useRef();
  const router = useRouter();
  const schema = object().shape({
    fullName: string().required("Your full name is Required"),
    email: string().email("Invalid Email"),
    phone: string().required("Your Phone Number is Required"),
  });

  type QuestionnaireDetails = {
    fullName: string;
    email: string;
    phone: string;
  };

  const submit = async (values: QuestionnaireDetails) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.BWT_URL}api/users/questionnaire`,
        data: values,
      });
      const data = await res.data;
      if (data.successful) {
        setMsg(data.message);
        setColor("success");
        const refState = snackBarRef.current as any;
        refState.handleClick();
        setTimeout(() => {
          window.location.href =
            "https://chat.whatsapp.com/GcmKr8AFmUQH47vsJoNCB0";
        }, 6000);
      } else {
        setMsg(data.message);
        setColor("error");
        const refState = snackBarRef.current as any;
        refState.handleClick();
      }
    } catch (err: any) {
      setMsg(err.response.data.message);
      setColor("error");
      const refState = snackBarRef.current as any;
      refState.handleClick();
    }
  };
  //sign up submit handler
  const submitHandler = async (values: QuestionnaireDetails) => {
    await submit(values);
  };
  //formik submit handler
  const formikSubmitHandler = (values: any, formikHelpers: any) => {
    return new Promise((res) => {
      formikHelpers
        .validateForm()
        .then(async (data: any) => {
          const msg = await submitHandler(values);

          res(msg);
        })
        .catch((err: any) => {
          res(err);
        });
    });
  };
  return (
    <>
      <SnackbarComponent msg={msg} color={color} ref={snackBarRef} />
      <Formik
        validationSchema={schema}
        initialValues={{ fullName: "", phone: "", email: "" }}
        onSubmit={formikSubmitHandler}
        enableReinitialize
      >
        {({ values, touched, isSubmitting, isValid, isValidating, errors }) => (
          <Form>
            <Box
              mt={"1rem"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography mb={5}>
                  Kindly fill this questionnaire, it will help us to serve you
                  best.
                </Typography>{" "}
              </Box>
              <BlackRequiredField
                helperText="Please give us your names in full"
                name="fullName"
                label="Full Name"
              />
              <BlackRequiredField
                label="Phone Number"
                name="phone"
                helperText="Your Whatsapp Number is preferrable"
              />
              <Field
                as={TextField}
                label="Email"
                helperText="Please enter a valid email address"
                InputLabelProps={{ shrink: true }}
                type="email"
                name="email"
                variant="standard"
                sx={{ minWidth: 300, maxWidth: 350, mb: 2, mr: 3 }}
              />
              <BlackRequiredField
                label="Occupation"
                helperText="Please tell us what you do"
                name="occupation"
              />
              <BlackRequiredField
                label="State"
                helperText="What is your state of residence?"
                name="state"
              />
              <BlackRequiredField
                label="City"
                helperText="What is your city of residence?"
                name="city"
              />
              <Box>
                <Typography mb={2}>
                  Please select the category you belong to
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton
                    name="category"
                    label="Secondary School Student/Parent"
                  />
                  <BlackRadioButton
                    name="category"
                    label="Secondary School Graduate/Parent"
                  />
                  <BlackRadioButton name="category" label="Undergraduate" />
                  <BlackRadioButton name="category" label="Do not Have a Job" />
                  <BlackRadioButton name="category" label="Have a Job" />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  How well do you know about Software Engineering?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton name="acquintance" label="Very well" />
                  <BlackRadioButton name="acquintance" label="Averagely" />
                  <BlackRadioButton name="acquintance" label="Very little" />
                  <BlackRadioButton
                    name="acquintance"
                    label="I have no knowledge at all"
                  />
                </Box>
              </Box>
              <BlackField
                name="preferredCourse"
                label="Preferred Course"
                helperText="Tell us what course(s) you would like to learn"
              />
              <Box>
                <Typography mb={2}>
                  Do you have a background in Computer Science?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton name="noBackground" label="Yes" />
                  <BlackRadioButton name="noBackground" label="No" />
                  <BlackRadioButton name="noBackground" label="Little" />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  Do you know you can become a Software Engineer without having
                  a background in Computer Science?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton name="background" label="Yes" />
                  <BlackRadioButton name="background" label="No" />
                  <BlackRadioButton name="background" label="Not Sure" />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  Are you aware that as a Software Engineer, one can earn up to
                  $55,000 in any country as an entry level Staff?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton name="earn" label="Yes" />
                  <BlackRadioButton name="earn" label="No" />
                  <BlackRadioButton name="earn" label="I don’t believe it" />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  Have you ever considered a switch in career to Software
                  Engineering?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton name="considered" label="Yes" />
                  <BlackRadioButton name="considered" label="No" />
                  <BlackRadioButton name="considered" label="Little" />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  Why would you want to consider a switch in Career?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton
                    name="switch"
                    label="Opportunity to earn in dollars"
                  />
                  <BlackRadioButton
                    name="switch"
                    label="opportunity to work remotely"
                  />
                  <BlackRadioButton name="switch" label="Ease of migration" />
                  <BlackRadioButton
                    name="switch"
                    label="High Demand for Software Engineers in both local and international labor markets"
                  />
                  <BlackRadioButton
                    name="switch"
                    label="Keeping abreast with digital trends"
                  />
                  <BlackRadioButton name="switch" label="All of the above" />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  According to experts, it takes four(4) years for one to become
                  an expert in Software Engineering. How long do you think is
                  ideal for a proper program?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton name="years" label="0-12 months" />
                  <BlackRadioButton name="years" label="12-24 months" />
                  <BlackRadioButton name="years" label="24-36 months" />
                  <BlackRadioButton name="years" label="36-48 months" />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  How many days in a week can you commit to the program if you
                  were to enroll?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton name="days" label="days or less" />
                  <BlackRadioButton name="days" label="3-5 days" />
                  <BlackRadioButton name="days" label="5-7 days" />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  How many hours in a day would you be able to commit?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton name="hours" label="1-2 hour" />
                  <BlackRadioButton name="hours" label="2-4 hours" />
                  <BlackRadioButton name="hours" label="4-6 hours" />
                  <BlackRadioButton name="hours" label="7hours or more" />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  Would you prefer virtual or physical classes?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton name="classes" label="Virtual" />
                  <BlackRadioButton name="classes" label="Physical……." />
                  <BlackRadioButton
                    name="classes"
                    label="A little bit of both"
                  />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  If you have the opportunity to be trained to become a Software
                  Engineer, what are the challenges you’re most likely going to
                  face?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton
                    name="challenges"
                    label="Inadequate funds"
                  />
                  <BlackRadioButton name="challenges" label="No time" />
                  <BlackRadioButton
                    name="challenges"
                    label="I’m not sure I can learn it"
                  />
                  <BlackRadioButton
                    name="challenges"
                    label="I am not interested"
                  />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  If there is a way you can earn for your tuition, would you
                  like to explore it?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton name="referal" label="Yes" />
                  <BlackRadioButton name="referal" label="No" />
                </Box>
              </Box>
              <Box>
                <Typography mb={2}>
                  We have a raffle draw where you stand a chance of winning a
                  scholarship for your preferred course or get 50% discount.
                  Application fee is ₦20,000 naira .Is this something you will
                  like to be a part of?
                </Typography>

                <Box flexDirection={"column"} display={"flex"}>
                  <BlackRadioButton name="raffleDraw" label="Yes" />
                  <BlackRadioButton name="raffleDraw" label="No" />
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
                mt={3}
                width={{ xs: "100%", md: "50%" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isValidating || isSubmitting || !isValid}
                  size="small"
                >
                  Submit
                </Button>
                <Button
                  type="reset"
                  variant="outlined"
                  size="small"
                  startIcon={<RestartAltIcon />}
                >
                  Reset
                </Button>
              </Box>
            </Box>

            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isSubmitting}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Form>
        )}
      </Formik>
    </>
  );
}
export function BlackRequiredField({
  helperText,
  label,
  name,
}: {
  helperText: string;
  label: string;
  name: string;
}) {
  return (
    <>
      <Field
        as={TextField}
        label={label}
        helperText={helperText}
        variant="standard"
        required
        sx={{ minWidth: 300, maxWidth: 350, mb: 2, mr: 3 }}
        InputLabelProps={{ shrink: true }}
        name={name}
      />
      <BlackErrorMessage name={name} />
    </>
  );
}
function BlackRadioButton({ label, name }: { label: string; name: string }) {
  return (
    <label style={{ marginBottom: "1rem" }}>
      <Field type="radio" name={name} value={label} />
      {label}
    </label>
  );
}
export function BlackField({
  helperText,
  label,
  name,
}: {
  helperText: string;
  label: string;
  name: string;
}) {
  return (
    <>
      <Field
        as={TextField}
        label={label}
        helperText={helperText}
        variant="standard"
        sx={{ minWidth: 300, maxWidth: 350, mb: 2, mr: 3 }}
        InputLabelProps={{ shrink: true }}
        name={name}
      />
    </>
  );
}
function BlackErrorMessage({ name }: { name: string }) {
  return (
    <Box color={"red"} fontSize={12} mb={2}>
      <ErrorMessage name={name} />
    </Box>
  );
}
export function BlackPasswordField({
  helperText,
  label,
  name,
}: {
  helperText: string;
  label: string;
  name: string;
}) {
  return (
    <>
      <Field
        as={TextField}
        label={label}
        helperText={helperText}
        variant="standard"
        type="password"
        required
        sx={{ minWidth: 300, maxWidth: 350, mb: 2, mr: 3 }}
        InputLabelProps={{ shrink: true }}
        name={name}
      />
      <BlackErrorMessage name={name} />
    </>
  );
}
export function BlackEmailField({
  helperText,
  label,
  name,
}: {
  helperText: string;
  label: string;
  name: string;
}) {
  return (
    <>
      <Field
        as={TextField}
        label={label}
        helperText={helperText}
        variant="standard"
        type="email"
        required
        sx={{ minWidth: 300, maxWidth: 350, mb: 2, mr: 3 }}
        InputLabelProps={{ shrink: true }}
        name={name}
      />
      <BlackErrorMessage name={name} />
    </>
  );
}
