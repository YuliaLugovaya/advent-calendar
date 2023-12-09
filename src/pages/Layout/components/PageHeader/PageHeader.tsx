import React, { FC, useState } from "react";
import {
  Box,
  CardMedia,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styles } from "./PageHeader.styled";
import { Link } from "react-router-dom";
import { routes } from "config/routes";
import ball from "assets/images/png/ball.png";
import burger from "assets/images/png/burger-menu.png";
import close from "assets/images/png/close.png";

export const PageHeader: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <Box sx={styles.headerWrapper} component="header">
      <Box sx={styles.headerContainer}>
        <Link to={routes.home}>
          <Box sx={styles.headerLogoContainer}>
            <CardMedia
              sx={styles.headerIcon}
              component="img"
              image={ball}
              alt="ball"
            />
            <Typography sx={styles.headerLogo}>Адвент-календарь</Typography>
          </Box>
        </Link>
        {isMobile ? (
          <Box>
            <CardMedia
              sx={styles.headerIcon}
              component="img"
              image={burger}
              alt="Burger-menu"
              onClick={toggleDrawer}
            />
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer}
              sx={styles.burgerMenu}
            >
              <CardMedia
                sx={styles.headerIconClose}
                component="img"
                image={close}
                alt="Close"
                onClick={toggleDrawer}
              />
              <Box sx={styles.headerLinksBurgerContainer}>
                <Link onClick={toggleDrawer} to={routes.home}>
                  <Typography sx={styles.headerLinksBurger}>
                    Главная страница
                  </Typography>
                </Link>
                <Link onClick={toggleDrawer} to={routes.tree}>
                  <Typography sx={styles.headerLinksBurger}>
                    Новогодняя ёлка
                  </Typography>
                </Link>
                <Link onClick={toggleDrawer} to={routes.balls}>
                  <Typography sx={styles.headerLinksBurger}>Шарики</Typography>
                </Link>
              </Box>
            </Drawer>
          </Box>
        ) : (
          <Box sx={styles.headerLinksContainer}>
            <Link to={routes.home}>
              <Typography sx={styles.headerLinks}>Главная страница</Typography>
            </Link>
            <Link to={routes.tree}>
              <Typography sx={styles.headerLinks}>Новогодняя ёлка</Typography>
            </Link>
            <Link to={routes.balls}>
              <Typography sx={styles.headerLinks}>Шарики</Typography>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
