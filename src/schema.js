import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";
import MainLayout from "./layouts/mainLayout/MainLayout";
import DashboardLayout from "./layouts/dasboardLayout/DashboardLayout";
import MoviesComponent from "./components/menu/movies/MoviesComponent";
import SettingsComponent from "./components/menu/settings/SettingsComponent";
import ErrorComponent from "./components/error-handler/ErrorComponent";

// import AccountView from 'src/views/account/AccountView';
// import DashboardView from 'src/views/reports/DashboardView';
// import LoginView from 'src/views/auth/LoginView';
// import NotFoundView from 'src/views/errors/NotFoundView';
// import ProductListView from 'src/views/product/ProductListView';
// import RegisterView from 'src/views/auth/RegisterView';
// import SettingsView from 'src/views/settings/SettingsView';

const routes = [
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      //   { path: 'account', element: <AccountView /> },
      { path: "movies", element: <MoviesComponent /> },
      //   { path: 'dashboard', element: <DashboardView /> },
      //   { path: 'products', element: <ProductListView /> },
      { path: "settings", element: <SettingsComponent /> },
    //   { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      //   { path: "login", element: <LoginView /> },
      //   { path: "register", element: <RegisterView /> },
      { path: "404", element: <ErrorComponent /> },
    //   { path: "/", element: <Navigate to="/app/dashboard" /> },
    //   { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
