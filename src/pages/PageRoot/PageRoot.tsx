import React, { FC, Suspense, lazy } from "react";
import { routes } from "config/routes";
import { useLocationScrollToTop } from "hooks/useLocationScrollToTop";
import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";

const HomePage = lazy(() => import("pages/HomePage"));
const TreePage = lazy(() => import("pages/TreePage"));
const BallsPage = lazy(() => import("pages/BallsPage"));
const ParentsPage = lazy(() => import("pages/ParentsPage"));
const EditPage = lazy(() => import("pages/EditPage"));
const BelarusTraditionsPage = lazy(() => import("pages/BelarusTraditionsPage"));
const WorldTraditionsPage = lazy(() => import("pages/WorldTraditionsPage"));
const MovieListPage = lazy(() => import("pages/MovieListPage"));
const CartoonListPage = lazy(() => import("pages/CartoonListPage"));
const SantasPage = lazy(() => import("pages/SantasPage"));

export const PageRoot: FC = () => {
  useLocationScrollToTop();
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={routes.home.root} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.home.tree} element={<TreePage />} />
          <Route path={routes.home.balls} element={<BallsPage />} />
          <Route path={routes.home.parents} element={<ParentsPage />} />
          <Route path={routes.home.edit} element={<EditPage />} />
          <Route
            path={routes.home.belarusTraditions}
            element={<BelarusTraditionsPage />}
          />
          <Route
            path={routes.home.worldTraditions}
            element={<WorldTraditionsPage />}
          />
          <Route path={routes.home.movieList} element={<MovieListPage />} />
          <Route path={routes.home.cartoonList} element={<CartoonListPage />} />
          <Route path={routes.home.santas} element={<SantasPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
