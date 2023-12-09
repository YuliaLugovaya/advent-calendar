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
        <Route path={routes.home.root} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.home.tree} element={<TreePage />} />
          <Route path={routes.home.balls} element={<BallsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
