import React, { FC } from "react";
import { Box, Link } from "@mui/material";
import { styles } from "./PageFooter.styled";

export const PageFooter: FC = () => {
  return (
    <Box sx={styles.footerWrapper} component="footer">
      <Link
        sx={styles.footerLink}
        href="https://github.com/YuliaLugovaya/advent-calendar"
      >
        GitHub
      </Link>
    </Box>
  );
};
