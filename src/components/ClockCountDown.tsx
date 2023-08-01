import React, { useEffect, useState } from "react";
import LockClockIcon from "@mui/icons-material/LockClock";
import { CountDown } from "@/lib/functions";
import { Box, Typography } from "@mui/material";

export default function ClockCountDown({ endDate }: { endDate: Date }) {
  const timeRem = endDate.valueOf() - new Date().valueOf();
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const setTime = (time: any) => {
    setDays(time.days);
    setHours(time.hours);
    setMinutes(time.minutes);
  };
  useEffect(() => {
    const time = CountDown(timeRem);
    setTime(time);
    setInterval(() => {
      const time = CountDown(timeRem);
      setTime(time);
    }, 60000);
  }, [timeRem]);
  return (
    <>
      {days === "-1" && hours === "-1" && minutes === "-1" ? (
        <Typography color="error">Class closed</Typography>
      ) : (
        <Box display={"flex"}>
          <LockClockIcon color="error" />
          <Typography ml={1} variant="caption">
            {`${days === "-1" ? 0 : days} days, ${
              hours === "-1" ? 0 : hours
            } hours, ${
              minutes === "-1" ? 0 : minutes
            } minutes left to join this class`}
          </Typography>
        </Box>
      )}
    </>
  );
}
