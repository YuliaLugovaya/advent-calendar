import React, { FC } from "react";
import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import { styles } from "./WorldTraditionsItem.styled";
import { IWorldTraditionsProps } from "./WorldTraditionsItemTypes";

export const WorldTraditionsItem: FC<IWorldTraditionsProps> = ({
  image,
  text,
  country,
}) => {
  return (
    <Card sx={styles.traditionsCard}>
      <CardContent>
        <Box>
          <Box sx={styles.traditionsContent}>
            <CardMedia
              image={image}
              component="img"
              alt={country}
              sx={styles.traditionsPicture}
            />
          </Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={styles.traditionsCountry}
          >
            {country}
          </Typography>
        </Box>
        <Typography sx={styles.traditionsDescription}>{text}</Typography>
      </CardContent>
    </Card>
  );
};
