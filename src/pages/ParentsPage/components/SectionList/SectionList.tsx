import React, { FC } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { styles } from "./SectionList.styled";
import { Link } from "react-router-dom";

export const SectionList: FC = () => {
  return (
    <List component="nav">
      <ListItem
        sx={styles.sectionsItem}
        component={Link}
        to={`/advent-calendar/edit`}
      >
        <ListItemText primary="Редактирование заданий" />
      </ListItem>
      <ListItem
        sx={styles.sectionsItem}
        component={Link}
        to={`/advent-calendar/belarus-traditions`}
      >
        <ListItemText primary="Новогодние традиции в Беларуси" />
      </ListItem>
      <ListItem
        sx={styles.sectionsItem}
        component={Link}
        to={`/advent-calendar/world-traditions`}
      >
        <ListItemText primary="Новогодние традиции в мире" />
      </ListItem>
      <ListItem
        sx={styles.sectionsItem}
        component={Link}
        to={`/advent-calendar/movie-list`}
      >
        <ListItemText primary="Список фильмов про зиму" />
      </ListItem>
      <ListItem
        sx={styles.sectionsItem}
        component={Link}
        to={`/advent-calendar/cartoon-list`}
      >
        <ListItemText primary="Список мультиков про зиму" />
      </ListItem>
      {/* <ListItem
        sx={styles.sectionsItem}
        component={Link}
        to={`/advent-calendar/edit`}
      >
        <ListItemText primary="Полезные ссылки" />
      </ListItem> */}
    </List>
  );
};
