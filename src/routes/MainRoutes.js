import React from "react";
import { Route, Routes } from "react-router-dom";
import ViewMenu from "../pages/ViewMenu";
import Register from "../authentication/register/Register";
import Login from "../authentication/login/Login";
import AddProduct from "../admin/AddProduct";
import Menu from "../pages/Menu";
import Edit from "../admin/Edit";

const MainRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <ViewMenu />,
      id: 1,
    },
    {
      link: "/login",
      element: <Login />,
      id: 2,
    },
    {
      link: "/register",
      element: <Register />,
      id: 3,
    },
    {
      link: "/add",
      element: <AddProduct />,
      id: 4,
    },
    {
      link: "/menu",
      element: <Menu />,
      id: 5,
    },
    {
      link: "/edit/:id",
      element: <Edit />,
      id: 6,
    },
  ];
  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
