"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";
import { StudentCommitedTime } from "@/lib/types/course";

export default function HoursSpentDailyRadioButtonsGroup({
  handleTimeChoice,
}: {
  handleTimeChoice: (value: StudentCommitedTime) => void;
}) {
  const [value, setValue] = React.useState<StudentCommitedTime>(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      parseInt((event.target as HTMLInputElement).value) as StudentCommitedTime
    );
  };
  React.useEffect(() => {
    handleTimeChoice(value);
  }, [value, handleTimeChoice]);
  return (
    <FormControl sx={{ maxWidth: "100%" }}>
      <FormLabel
        id="demo-controlled-radio-buttons-group"
        sx={{ maxWidth: { xs: "80%", sm: "100%", fontWeight: "bold" } }}
      >
        How much time can you commit daily to this course?
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{ maxWidth: { xs: "80%", sm: "100%", md: "100%" } }}
        color="secondary"
      >
        <FormControlLabel
          value="1"
          control={<Radio size="small" checked />}
          label="1 hour - 2 yrs - ₦30,000/month"
        />
        <FormControlLabel
          value="2"
          control={<Radio size="small" disabled />}
          label="2 hours - 1.5 yrs - ₦50,000/month"
        />
        <FormControlLabel
          value="4"
          control={<Radio size="small" disabled />}
          label="4 hours - 1 yr - ₦80,000/month"
        />
        <FormControlLabel
          value="8"
          control={<Radio size="small" disabled />}
          label="8 hours - 0.5 yr - ₦100,000/month"
        />
      </RadioGroup>
      <Button variant="contained">Submit</Button>
    </FormControl>
  );
}
