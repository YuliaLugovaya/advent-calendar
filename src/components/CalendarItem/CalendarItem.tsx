import React, { FC, useState } from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { ICalendarItemProps } from "./CalendarItemTypes";
import { TaskModal } from "pages/HomePage/components/TaskModal";
import { styles } from "./CalendarItem.styled";
import { useSelector } from "react-redux";
import { TaskState } from "store/task/taskTypes";

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
}) => {
  const [openModal, setOpenModal] = useState(false);
  const modalOpen = () => setOpenModal(true);
  const modalClose = () => setOpenModal(false);
  const isCompleted = useSelector(
    (rootReducer: { task: TaskState }) =>
      rootReducer.task.isCompleted[id] || false,
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <Box sx={styles.itemWrapper}>
      <Button
        onClick={modalOpen}
        sx={{
          ...styles.itemContainer,
          bgcolor: isCompleted ? "#434a3855" : colorBg,
          "&:hover": { bgcolor: isCompleted ? "#434a3855" : `${colorBg}77` },
        }}
      >
        <Typography sx={styles.itemText}>{text}</Typography>
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
