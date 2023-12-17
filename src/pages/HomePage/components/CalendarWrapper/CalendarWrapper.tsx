import React, { FC } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { styles } from "./CalendarWrapper.styled";
import { Calendar } from "../Calendar/Calendar";
import christmas from "assets/images/png/christmas-city.png";

export const CalendarWrapper: FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Box
      sx={{
        ...styles.calendarWrapper,
        background: `url(${christmas}) center bottom/100% #5e4a4b11 no-repeat`,
      }}
    >
      {isDesktop && (
        <Box sx={styles.calendarContent}>
          <Typography sx={styles.calendarTitle}>
            Открывай{" "}
            <Typography sx={styles.calendarAccent} component="span">
              сюрпризы и волшебство
            </Typography>{" "}
            каждый день!
          </Typography>
        </Box>
      )}
      <Calendar />
    </Box>
  );
};
