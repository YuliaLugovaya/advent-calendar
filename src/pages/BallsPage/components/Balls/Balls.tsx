import React, { FC } from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { styles } from "./Balls.styled";
import { useSelector } from "react-redux";
import { BallState } from "store/ball/ballTypes";
import lights from "assets/images/png/balls.png";
import { Link } from "react-router-dom";
import { routes } from "config/routes";

export const Balls: FC = () => {
  const balls = useSelector(
    (rootReducer: { ball: BallState }) => rootReducer.ball.ballsGallery,
  );
  const isStart = balls.length === 0;

  return (
    <Box sx={styles.treeContainer}>
      {isStart ? (
        <Box sx={styles.ballsWrapper}>
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
        </Box>
      ) : (
        <Box sx={styles.ballsContainer}>
          {balls.map((ball, index) => (
            <img key={index} src={ball} alt="ball" />
          ))}
        </Box>
      )}
    </Box>
  );
};
