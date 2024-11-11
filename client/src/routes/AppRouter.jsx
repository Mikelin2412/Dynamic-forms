import React from "react";
import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
