import React, { FC, DragEvent, useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styles } from "./Tree.styled";
import treeImage from "assets/images/png/tree.png";
import { useDispatch, useSelector } from "react-redux";
import { BallState } from "store/ball/ballTypes";
import { addTreeBall, removeBall } from "store/ball/ballActions";
import lights from "assets/images/png/balls.png";
import { Link } from "react-router-dom";
import { routes } from "config/routes";

export const Tree: FC = () => {
  const balls = useSelector(
    (rootReducer: { ball: BallState }) => rootReducer.ball.balls,
  );
  const treeBalls = useSelector(
    (rootReducer: { ball: BallState }) => rootReducer.ball.treeBalls,
  );
  const isStart = balls.length === 0 && treeBalls.length < 31;
  const isFinish = balls.length === 0 && treeBalls.length === 31;
  console.log(isFinish);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const dispatch = useDispatch();
  const [draggedBall, setDraggedBall] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, ball: string) => {
    e.dataTransfer.setData("ball", ball);
  };

  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>,
    ball: string,
  ) => {
    if (!isDragging) {
      setIsDragging(true);
      setDraggedBall(ball);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedBall = e.dataTransfer.getData("ball");
    if (droppedBall) {
      dispatch(addTreeBall(droppedBall));
      dispatch(removeBall(droppedBall));
    }
  };

  const handleTouchEnd = () => {
    if (isDragging && draggedBall) {
      dispatch(addTreeBall(draggedBall));
      dispatch(removeBall(draggedBall));
      setIsDragging(false);
      setDraggedBall(null);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={styles.treeContainer}
      onDrop={handleDrop}
      onTouchEnd={handleTouchEnd}
      onDragOver={handleDragOver}
    >
      <Box sx={styles.ballsWrapper}>
        <Box sx={styles.ballsContainer}>
          {isStart ? (
            <>
              <CardMedia
                sx={styles.treeLights}
                component="img"
                image={lights}
                alt="lights"
                className="lights"
              />
              <Typography sx={styles.ballsDescription}>
                Скорее выполняй задания и собирай шарики, чтобы украсить ёлочку!
              </Typography>
              <Link to={routes.home.root}>
                <Button sx={styles.treeButton} className="secondary">
                  Перейти к заданиям
                </Button>
              </Link>
            </>
          ) : isFinish ? (
            <>
              <CardMedia
                sx={styles.treeLights}
                component="img"
                image={lights}
                alt="lights"
                className="lights"
              />
              <Typography sx={styles.ballsDescription}>
                Вау! Такая красивая ёлочка у тебя получилась! Не забудь
                посмотреть свою коллекцию новогодних шариков. А потом готовься к
                празднику, ведь уже сегодня нужно встречать Новый год. Пусть
                сбудутся все желания, которые ты загадаешь в новогоднюю ночь!
              </Typography>
              <Link to={`/advent-calendar/balls`}>
                <Button sx={styles.treeButton} className="secondary">
                  Посмотреть шарики
                </Button>
              </Link>
            </>
          ) : (
            <Box sx={styles.ballsBoxTitle}>
              {isMobile ? (
                <Typography sx={styles.ballsTask}>
                  Нажми на шарик, чтобы он попал на ёлку
                </Typography>
              ) : (
                <Typography sx={styles.ballsTask}>
                  Перетяни шарики на ёлку
                </Typography>
              )}
              <Box sx={styles.ballsBox}>
                {balls.map((ball, index) => (
                  <img
                    key={index}
                    src={ball}
                    alt="ball"
                    draggable
                    onDragStart={(e) => handleDragStart(e, ball)}
                    onTouchStart={(e) => handleTouchStart(e, ball)}
                  />
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      <Box
        sx={styles.treeChristmasContainer}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        style={{ position: "relative" }}
      >
        <CardMedia
          sx={styles.treeChristmas}
          component="img"
          image={treeImage}
          alt="tree"
        />
        <Box sx={styles.treeBalls}>
          {treeBalls.map((treeBall, index) => (
            <img key={index} src={treeBall} alt="treeBall" />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
