"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import { AssignmentQuestion } from "@/lib/types/course";

export default function AssignmentQuestionOptions({
  que,
  handleAnswer,
  showAnswer,
}: {
  que: AssignmentQuestion;
  showAnswer: boolean;
  handleAnswer: (
    answer: string,
    question: string,
    questionAnswer: string
  ) => void;
}) {
  const [value, setValue] = React.useState("");
  const [showAns, setShowAns] = React.useState(showAnswer);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ans = (event.target as HTMLInputElement).value;
    setValue(ans);
    handleAnswer(ans, que.question, que.answer);
  };
  React.useEffect(() => {
    setShowAns(showAnswer);
  }, [showAnswer]);
  return (
    <FormControl sx={{ maxWidth: "100%" }}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={showAns ? que.answer : value}
        onChange={handleChange}
        sx={{ maxWidth: { xs: "80%", sm: "100%", md: "100%" } }}
      >
        <Typography>{`${que.question}?  (${que.mark} marks)`}</Typography>
        {que.answerOptions.map((opt) => (
          <FormControlLabel
            key={opt}
            value={opt}
            control={
              <Radio
                checked={value === opt || (showAns && opt === que.answer)}
                color={
                  showAns && opt === que.answer
                    ? "success"
                    : showAns
                    ? "error"
                    : "primary"
                }
              />
            }
            label={opt}
            sx={{ minWidth: "100%" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
