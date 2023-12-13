import React, { FC } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styles } from "./MoviesCard.styled";
import { IMoviesCardProps } from "./MoviesCardTypes";

export const MoviesCard: FC<IMoviesCardProps> = ({ image, title, text }) => {
  return (
    <Card sx={styles.moviesCard}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={styles.moviesPicture}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={styles.moviesSubtitle}
        >
          {title}
        </Typography>
        <Typography sx={styles.moviesDescription}>{text}</Typography>
      </CardContent>
    </Card>
  );
};
