import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./Parents.styled";
import { Link } from "react-router-dom";
import { SectionList } from "../SectionList";

export const Parents: FC = () => {
  return (
    <Box sx={styles.parentsContainer}>
      <Box sx={styles.parentsSections}>
        <SectionList />
      </Box>
      <Box sx={styles.parentsAbout}>
        <Typography sx={styles.parentsTitle}>Дорогие родители!</Typography>
        <Typography sx={styles.parentsDescription}>
          Новогодний адвент-календарь – это волшебное приключение, которое
          развивает воображение, творческое мышление и навыки решения задач у
          детей. Календарь поможет вашим детям научиться планировать свои
          действия, справляться с заданиями и достигать поставленных целей.
        </Typography>
        <Typography sx={styles.parentsDescription}>
          Правила игры просты: каждый день ваш ребенок будет нажимать на
          карточку с текущей датой и выполнять предложенное задание. Важно
          отметить, что в этом процессе родители также играют важную роль в
          поддержке и поощрении. Вы можете помочь своему ребенку разобраться с
          заданием и предложить ему свою помощь, если это необходимо.
        </Typography>
        <Typography sx={styles.parentsDescription}>
          За каждое выполненное задание ребенку будет предоставлен в награду
          виртуальный шарик, который можно прикрепить на виртуальную елку.
          Ребенок сможет посмотреть все собранные шарики на отдельной странице,
          что станет дополнительным вдохновением для продолжения приключений.
          Как особый бонус, вы можете приготовить для ребенка игрушки, фигурки
          или другие сюрпризы, которые он будет получать в награду за усилия.
        </Typography>
        <Typography sx={styles.parentsDescription}>
          Еще одно преимущество календаря - возможность{" "}
          <Link to={`/advent-calendar/edit`}>
            <Typography sx={styles.parentsAccent} component="span">
              просмотра и редактирования
            </Typography>
          </Link>{" "}
          всех заданий родителями. Таким образом, вы сможете адаптировать
          календарь под интересы вашего ребенка.
        </Typography>
        <Typography sx={styles.parentsDescription}>
          Пусть новогодний адвент-календарь принесет вам и вашим детям много
          радости и веселья. Позвольте им погрузиться в мир волшебства, учиться
          и расти через игру и создавать воспоминания, которые они будут хранить
          долгие годы.
        </Typography>
      </Box>
    </Box>
  );
};
