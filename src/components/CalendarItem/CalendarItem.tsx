import React, { FC, useState } from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { ICalendarItemProps } from "./CalendarItemTypes";
import { TaskModal } from "pages/HomePage/components/TaskModal";
import { styles } from "./CalendarItem.styled";
import { useSelector } from "react-redux";
import { TaskState } from "store/task/taskTypes";
import snowCap from "assets/images/png/snow-cap.png";

export const CalendarItem: FC<ICalendarItemProps> = ({
  icon,
  title,
  text,
  task,
  ball,
  colorBg,
  id,
  date,
  link,
  active,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseMove, setIsMouseMove] = useState(false);
  const isCompleted = useSelector(
    (rootReducer: { task: TaskState }) =>
      rootReducer.task.isCompleted[id] || false,
  );

  const modalOpen = () => {
    if (!isMouseMove) {
      setOpenModal(true);
    }
  };
  const modalClose = () => setOpenModal(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);
    setIsMouseMove(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = () => {
    if (isMouseDown) {
      setIsMouseMove(true);
    }
  };

  return (
    <Box
      sx={{
        ...styles.itemWrapper,
        position: "relative",
        "&:before": {
          content: `""`,
          display: "block",
          width: "calc(100%)",
          height: "44px",
          position: "absolute",
          top: "-23px",
          left: "-1px",
          zIndex: "2",
          background: active
            ? `url(${snowCap}) left top/100% 100% no-repeat`
            : "none",
        },
      }}
    >
      <Button
        onClick={modalOpen}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        sx={{
          ...styles.itemContainer,
          bgcolor: colorBg,
          outline: isCompleted ? "5px solid rgb(250, 243, 198)" : "none",
          boxShadow: isCompleted
            ? "0px 0px 10px 10px rgba(255, 255, 255, 0.8)"
            : "none",
          "&:hover": { bgcolor: `${colorBg}99` },
        }}
      >
        <Box sx={styles.itemTitle}>
          <Typography sx={styles.itemDay}>{text}</Typography>
          <Typography sx={styles.itemText}>декабря</Typography>
        </Box>
        <CardMedia
          sx={styles.itemIcon}
          component="img"
          image={icon}
          alt="Icon"
        />
      </Button>
      <TaskModal
        openModal={openModal}
        modalClose={modalClose}
        title={title}
        task={task}
        ball={ball}
        id={id}
        date={date}
        text={text}
        link={link}
      />
    </Box>
  );
};
