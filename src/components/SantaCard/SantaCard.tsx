import React, { FC } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styles } from "./SantaCard.styled";
import { ISantaCardProps } from "./SantaCardTypes";

export const SantaCard: FC<ISantaCardProps> = ({
  image,
  title,
  text,
  country,
}) => {
  return (
    <Card sx={styles.santaCard}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={styles.santaPicture}
      />
      <CardContent sx={styles.santaContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={styles.santaSubtitle}
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={styles.santaCountry}
        >
          {country}
        </Typography>
        <Typography sx={styles.santaDescription}>{text}</Typography>
      </CardContent>
    </Card>
  );
};
