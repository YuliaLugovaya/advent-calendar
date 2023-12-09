import React, { FC } from "react";
import { Box } from "@mui/material";
import { styles } from "./Balls.styled";
import { useSelector } from "react-redux";
import { BallState } from "store/ball/ballTypes";

export const Balls: FC = () => {
  const balls = useSelector(
    (rootReducer: { ball: BallState }) => rootReducer.ball.ballsGallery,
  );
  return (
    <Box sx={styles.treeContainer}>
      <Box sx={styles.ballsContainer}>
        {balls.map((ball, index) => (
          <img key={index} src={`/advent-calendar/${ball}`} alt="ball" />
        ))}
      </Box>
    </Box>
  );
};
