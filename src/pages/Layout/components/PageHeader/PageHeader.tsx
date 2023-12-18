import React, { FC, useEffect, useState } from "react";
import {
  Box,
  CardMedia,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styles } from "./PageHeader.styled";
import { Link, useLocation } from "react-router-dom";
import { routes } from "config/routes";
import ball from "assets/images/png/ball.png";
import burger from "assets/images/png/burger-menu.png";
import close from "assets/images/png/close.png";

export const PageHeader: FC = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(routes.home.root);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const isActiveLink = (path: string) => {
    return activeLink.endsWith(path) ? "#c29463" : "#FFFFFF";
  };

  return (
    <Box sx={styles.headerWrapper} component="header">
      <Box sx={styles.headerContainer}>
        <Link to={routes.home.root}>
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
                <Link onClick={toggleDrawer} to={routes.home.root}>
                  <Typography
                    sx={{
                      ...styles.headerLinksBurger,
                      color: isActiveLink(routes.home.root),
                    }}
                  >
                    Главная страница
                  </Typography>
                </Link>
                <Link onClick={toggleDrawer} to={routes.home.tree}>
                  <Typography
                    sx={{
                      ...styles.headerLinksBurger,
                      color: isActiveLink(routes.home.tree),
                    }}
                  >
                    Новогодняя ёлка
                  </Typography>
                </Link>
                <Link onClick={toggleDrawer} to={routes.home.balls}>
                  <Typography
                    sx={{
                      ...styles.headerLinksBurger,
                      color: isActiveLink(routes.home.balls),
                    }}
                  >
                    Шарики
                  </Typography>
                </Link>
                <Link onClick={toggleDrawer} to={routes.home.parents}>
                  <Typography
                    sx={{
                      ...styles.headerLinksBurger,
                      color: isActiveLink(routes.home.parents),
                    }}
                  >
                    Родителям
                  </Typography>
                </Link>
              </Box>
            </Drawer>
          </Box>
        ) : (
          <Box sx={styles.headerLinksContainer}>
            <Link to={routes.home.root}>
              <Typography
                sx={{
                  ...styles.headerLinks,
                  color: isActiveLink(routes.home.root),
                }}
              >
                Главная страница
              </Typography>
            </Link>
            <Link to={routes.home.tree}>
              <Typography
                sx={{
                  ...styles.headerLinks,
                  color: isActiveLink(routes.home.tree),
                }}
              >
                Новогодняя ёлка
              </Typography>
            </Link>
            <Link to={routes.home.balls}>
              <Typography
                sx={{
                  ...styles.headerLinks,
                  color: isActiveLink(routes.home.balls),
                }}
              >
                Шарики
              </Typography>
            </Link>
            <Link to={routes.home.parents}>
              <Typography
                sx={{
                  ...styles.headerLinks,
                  color: isActiveLink(routes.home.parents),
                }}
              >
                Родителям
              </Typography>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
