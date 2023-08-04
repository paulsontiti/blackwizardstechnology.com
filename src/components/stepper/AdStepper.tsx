import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import AdvertCard from "../cards/AdvertCard";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    imgPath: "/assets/nysc.jpg",
    url: "/web-development",
    title: "Hello",
    description: "web-developmentweb-developmentweb-development",
  },
  {
    imgPath: "/assets/career.jpg",
    url: "/web-development",
    title: "Hello",
    description:
      "web-developmentweb-developmentweb-developmentweb-developmentweb-development",
  },
  // {
  //   imgPath: "/assets/career.jpg",
  //   url: "/web-development",
  // },
  // {
  //   imgPath: "/assets/nysc.jpg",
  //   url: "/web-development",
  // },
];

function AdsStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = images.length;

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
    <Box>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        {images[activeStep].title}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={10000}
      >
        {images.map((ad: any, index: number) => (
          <div key={ad.imgPath}>
            {Math.abs(activeStep - index) <= 2 ? (
              <AdvertCard
                title={ad.title}
                message={ad.description}
                src={ad.imgPath}
              />
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

export default AdsStepper;
