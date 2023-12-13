import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./MovieList.styled";
import moviesItems from "config/moviesItems";
import { MoviesCard } from "components/MoviesCard";

export const MovieList: FC = () => {
  const movies = moviesItems;

  return (
    <Box sx={styles.moviesContainer}>
      <Typography sx={styles.moviesTitle}>
        Семейные фильмы про зиму, Новый год и Рождество
      </Typography>
      <Box sx={styles.moviesList}>
        {movies.map((item) => (
          <MoviesCard
            key={item.id}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
      </Box>
    </Box>
  );
};
