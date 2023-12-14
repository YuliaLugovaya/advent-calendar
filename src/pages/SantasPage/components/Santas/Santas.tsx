import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./Santas.styled";
import santasItems from "config/cantasItems";
import { SantaCard } from "components/SantaCard";

export const Santas: FC = () => {
  const santas = santasItems;

  return (
    <Box sx={styles.santasContainer}>
      <Typography sx={styles.santasTitle}>Деды Морозы разных стран</Typography>
      <Box sx={styles.santasList}>
        {santas.map((item) => (
          <SantaCard
            key={item.id}
            image={item.image}
            title={item.title}
            text={item.text}
            country={item.country}
          />
        ))}
      </Box>
    </Box>
  );
};
