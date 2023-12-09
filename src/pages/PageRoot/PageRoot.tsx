import React, { FC, Suspense, lazy } from "react";
import { routes } from "config/routes";
import { useLocationScrollToTop } from "hooks/useLocationScrollToTop";
import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";

const HomePage = lazy(() => import("pages/HomePage"));
const TreePage = lazy(() => import("pages/TreePage"));
const BallsPage = lazy(() => import("pages/BallsPage"));

export const PageRoot: FC = () => {
  useLocationScrollToTop();
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.tree} element={<TreePage />} />
          <Route path={routes.balls} element={<BallsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
