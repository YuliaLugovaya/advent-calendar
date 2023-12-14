import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./WorldTraditions.styled";
import morldTraditionsItems from "config/morldTraditionsItems";
import { WorldTraditionsItem } from "components/WorldTraditionsItem";

export const WorldTraditions: FC = () => {
  const traditions = morldTraditionsItems;

  return (
    <Box sx={styles.traditionsContainer}>
      <Typography sx={styles.traditionsTitle}>
        Традиции празднования Нового года в мире
      </Typography>
      <Box sx={styles.traditionsSection}>
        {traditions.map((item) => (
          <WorldTraditionsItem
            key={item.id}
            image={item.image}
            text={item.text}
            country={item.country}
          />
        ))}
      </Box>
    </Box>
  );
};
