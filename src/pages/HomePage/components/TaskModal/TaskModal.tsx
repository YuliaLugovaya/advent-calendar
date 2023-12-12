import React, { FC, useState } from "react";
import {
  Typography,
  Box,
  Modal,
  IconButton,
  Button,
  CardMedia,
} from "@mui/material";
import { ReactComponent as CloseIcon } from "assets/svg/icon_close.svg";
import { styles } from "./TaskModal.styled";
import { ITaskModalProps } from "./TaskModalTypes";
import { useDispatch, useSelector } from "react-redux";
import { addBall } from "store/ball/ballActions";
import { addCompletedTask, isCompletedTask } from "store/task/taskActions";
import { TaskState } from "store/task/taskTypes";
import { Link } from "react-router-dom";
import { routes } from "config/routes";
import lights from "assets/images/png/christmas-lights.png";
import complete from "assets/images/png/complete.png";

export const TaskModal: FC<ITaskModalProps> = ({
  openModal,
  modalClose,
  title,
  task,
  ball,
  id,
  date,
  text,
}) => {
  const [showBallContent, setShowBallContent] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const currentDate = new Date();
  const comingDate = new Date(date);
  const isReady = comingDate <= currentDate;

  const dispatch = useDispatch();

  const completedTasks = useSelector(
    (rootReducer: { task: TaskState }) => rootReducer.task.completedTasks,
  );
  const isCompleted = useSelector(
    (rootReducer: { task: TaskState }) =>
      rootReducer.task.isCompleted[id] || false,
  );

  const handleReceiveBall = () => {
    if (ball) {
      dispatch(addBall(ball));
      setShowBallContent(true);
    }
    if (!completedTasks.includes(id)) {
      dispatch(addCompletedTask(id));
      dispatch(isCompletedTask({ id: id, value: true }));
    }
  };

  const toggleTask = () => {
    setShowTask(!showTask);
  };

  return (
    <Modal
      open={openModal}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalContainer}>
        <CardMedia
          sx={styles.modalLights}
          component="img"
          image={lights}
          alt="lights"
        />
        {showBallContent ? (
          <>
            <IconButton
              aria-label="Close"
              sx={styles.modalIconClose}
              onClick={modalClose}
            >
              <CloseIcon />
            </IconButton>
            <CardMedia
              sx={styles.modalBall}
              component="img"
              image={ball}
              alt="Ball"
            />
            <Typography sx={styles.modalDescription}>
              Здорово! В награду за старания держи ёлочный шарик.
            </Typography>
            <Link to={routes.home.tree}>
              <Button sx={styles.modalButton} className="secondary">
                Нарядить новогоднюю ёлочку
              </Button>
            </Link>
          </>
        ) : isCompleted ? (
          <>
            <IconButton
              aria-label="Close"
              sx={styles.modalIconClose}
              onClick={modalClose}
            >
              <CloseIcon />
            </IconButton>
            <Box sx={styles.modalContent}>
              <Typography sx={styles.modalTitle}>{title}</Typography>
              <Box sx={styles.modalCompleteContainer}>
                <Typography sx={styles.modalCompleteDescription}>
                  Это задание уже выполнено
                </Typography>
                <CardMedia
                  sx={styles.modalComplete}
                  component="img"
                  image={complete}
                  alt="Complete"
                />
              </Box>
              {showTask && (
                <Typography sx={styles.modalDescription}>{task}</Typography>
              )}
              <Button
                sx={styles.modalButton}
                className="secondary"
                onClick={toggleTask}
              >
                {showTask ? "Скрыть описание" : "Развернуть описание"}
              </Button>
            </Box>
          </>
        ) : (
          <>
            <IconButton
              aria-label="Close"
              sx={styles.modalIconClose}
              onClick={modalClose}
            >
              <CloseIcon />
            </IconButton>
            <Box sx={styles.modalContent}>
              {isReady ? (
                <>
                  <Typography sx={styles.modalTitle}>{title}</Typography>
                  <Typography sx={styles.modalDescription}>{task}</Typography>
                  <Box>
                    <Button
                      onClick={handleReceiveBall}
                      sx={styles.modalButton}
                      className="primary"
                    >
                      Задание выполнено? Получи сюрприз!
                    </Button>
                  </Box>
                </>
              ) : (
                <Typography sx={styles.modalDescription}>
                  Это задание будет доступно {text} декабря. Осталось немножко
                  подождать!
                </Typography>
              )}
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};
