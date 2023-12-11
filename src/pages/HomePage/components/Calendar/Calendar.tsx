import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { styles } from "./Calendar.styled";
import calendarItems from "config/calendarItems";
import { CalendarItem } from "../../../../components/CalendarItem/CalendarItem";
import { resetBallState } from "store/ball/ballActions";
import { resetTaskState } from "store/task/taskActions";

export const Calendar: FC = () => {
  const days = calendarItems();
  const dispatch = useDispatch();

  const handleReset = () => {
    window.localStorage.clear();
    dispatch(resetBallState());
    dispatch(resetTaskState());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={styles.calendarWrapper}>
      <Box sx={styles.calendarContainer}>
        {days.map((item) => (
          <CalendarItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
            task={item.task}
            ball={item.ball}
            colorBg={item.colorBg}
            id={item.id}
            date={item.date}
          />
        ))}
      </Box>
      <Button
        sx={styles.calendarButton}
        className="secondary"
        onClick={handleReset}
      >
        Начать сначала!
      </Button>
    </Box>
  );
};
