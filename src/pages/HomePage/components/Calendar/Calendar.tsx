import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { styles } from "./Calendar.styled";
import { CalendarItem } from "components/CalendarItem/CalendarItem";
import { CalendarItemsState } from "store/edit/editTypes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { format } from "date-fns";
import prev from "assets/images/png/prev.png";
import next from "assets/images/png/next.png";

export const Calendar: FC = () => {
  const days = useSelector(
    (rootReducer: { edit: CalendarItemsState }) => rootReducer.edit.tasks,
  );
  const currentDate = format(new Date(), "yyyy-MM-dd");
  const currentDay = days.find((item) => item.date === currentDate);
  const [currentSlide, setCurrentSlide] = useState(
    currentDay ? days.indexOf(currentDay) : 0,
  );
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSlide);
    }
  }, [currentSlide]);

  const settings = {
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchThreshold: 500,
    centerMode: true,
    initialSlide: currentSlide,
    afterChange: (slideIndex: number) => setCurrentSlide(slideIndex),
    swipeToSlide: true,
    infinite: false,
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <Box sx={styles.calendarContainer}>
      <Slider ref={sliderRef} {...settings}>
        {days.map((item) => (
          <CalendarItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
            task={item.task}
            ball={item.ball}
            colorBg={item.colorBg}
            id={item.id}
            date={item.date}
            link={item.link}
            active={item.date === (currentDay ? currentDay.date : "")}
          />
        ))}
      </Slider>
      <Box sx={styles.calendarButtons}>
        <Button
          sx={{
            ...styles.calendarPrev,
            "&:before": {
              width: "20px",
              height: "20px",
              position: "absolute",
              content: '""',
              background: `url(${prev}) no-repeat`,
            },
          }}
          onClick={prevSlide}
        ></Button>
        <Button
          sx={{
            ...styles.calendarNext,
            "&:before": {
              width: "20px",
              height: "20px",
              position: "absolute",
              content: '""',
              background: `url(${next}) no-repeat`,
            },
          }}
          onClick={nextSlide}
        ></Button>
      </Box>
    </Box>
  );
};
