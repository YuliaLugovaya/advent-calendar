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
  const modalOpen = () => setOpenModal(true);
  const modalClose = () => setOpenModal(false);
  const isCompleted = useSelector(
    (rootReducer: { task: TaskState }) =>
      rootReducer.task.isCompleted[id] || false,
  );

  return (
    <Box>
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
            top: "-20px",
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
          sx={{
            ...styles.itemContainer,
            bgcolor: isCompleted ? "#434a3855" : colorBg,
            "&:hover": { bgcolor: isCompleted ? "#434a3855" : `${colorBg}77` },
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
    </Box>
  );
};
