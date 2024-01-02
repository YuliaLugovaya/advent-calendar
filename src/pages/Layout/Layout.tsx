import React, { Suspense, FC, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { PageHeader } from "./components/PageHeader";
import { PageFooter } from "./components/PageFooter";
import { Box } from "@mui/material";
import { TestModal } from "./components/TestModal";

export const Layout: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const modalClose = () => setOpenModal(false);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const isNotDecember = currentMonth >= 0 && currentMonth <= 10;

  useEffect(() => {
    if (isNotDecember) {
      const timeout = setTimeout(() => {
        setOpenModal(true);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
    return undefined;
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <PageHeader />
      <Suspense fallback={null}>
        <Box component="main" sx={{ flex: "1 1 auto" }}>
          <Outlet />
          <TestModal openModal={openModal} modalClose={modalClose} />
        </Box>
      </Suspense>
      <PageFooter />
    </Box>
  );
};
