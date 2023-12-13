import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./CartoonList.styled";
import cartoonItems from "config/cartoonItems";
import { MoviesCard } from "components/MoviesCard";

export const CartoonList: FC = () => {
  const cartoons = cartoonItems;

  return (
    <Box sx={styles.cartoonContainer}>
      <Typography sx={styles.cartoonTitle}>
        Мультфильмы про зиму, Новый год и Рождество
      </Typography>
      <Box sx={styles.cartoonList}>
        {cartoons.map((item) => (
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
