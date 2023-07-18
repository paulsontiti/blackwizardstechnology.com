import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import CardActions from "@mui/material/CardActions";
import { useRouter } from "next/router";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    title: `Did you know you can become a software Engineer without a
    background in Computer Science? Let us help you get it done`,
    label:
      "While a computer science degree may provide a strong foundation and give a more comprehensive understanding of theoretical concepts, it is not the only path to mastering Software Engineering.",
    imgPath: "/assets/software-engineering.jpeg",
    freeClassUrl: "/",
    learnMoreurl: "",
  },
  {
    title: "Become a Web Developer in 12 Months",
    label: `Learn Css, Html, Javascript, ReactJs, NextJs and Material UI. No experience needed.
     We take you from beginner's level to intermediate level. You will build an Ecommerce website with the team`,
    imgPath: "/assets/web-development.jpg",
    freeClassUrl: "/free-web-class",
    learnMoreurl: "/web-development",
  },
  {
    label: "Bali, Indonesia",
    title: "Become a Mobile Developer in 12 Months",
    imgPath: "/assets/mobile-development.jpeg",
    freeClassUrl: "/",
    learnMoreurl: "",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    freeClassUrl: "/",
    learnMoreurl: "",
  },
];

function IntroStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const router = useRouter();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1, height: "100vh" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Box
                  color={"orange"}
                  position={"absolute"}
                  top={100}
                  p={2}
                  minWidth={{ xs: 300, sm: 600 }}
                  maxWidth={{ xs: 300, sm: 600 }}
                >
                  <Typography zIndex={100} fontWeight={"bold"} mb={2}>
                    {step.title}
                  </Typography>
                  <Typography color={"white"} mb={5}>
                    {step.label}
                  </Typography>
                  <CardActions>
                    <Button
                      onClick={() => {
                        router.push(step.freeClassUrl as string);
                      }}
                      size="small"
                      variant="contained"
                      sx={{
                        bgcolor: "orange",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Join A Free Class
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{ color: "orange" }}
                      onClick={() => {
                        router.push(step.learnMoreurl as string);
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Box>
                <Box
                  component="img"
                  sx={{
                    height: "90vh",
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default IntroStepper;
