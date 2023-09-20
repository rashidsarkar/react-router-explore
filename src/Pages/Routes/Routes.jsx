import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MyMainLayout from "../../layouts/MyMainLayout";
import Home from "../Home/Home";
import Products from "../Products/Products";
import SingleProdact from "../SingleProdact/SingleProdact";
import DashBordLayout from "../../layouts/DashBordLayout";
import DashBordHome from "../../DashBordsPages/DashBordHome";
import DashProfile from "../../DashBordsPages/DashProfile";
import DashEfitProfile from "../../DashBordsPages/DashEfitProfile";
import DashSetting from "../../DashBordsPages/DashSetting";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MyMainLayout></MyMainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Products",
        element: <Products></Products>,
        loader: () => fetch(`https://dummyjson.com/products`),
      },

      {
        path: "/Products/:idx",
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.idx}`),
        element: <SingleProdact></SingleProdact>,
      },
      {
        path: "/dashboard",
        element: <DashBordLayout></DashBordLayout>,
        children: [
          {
            path: "",
            element: <DashBordHome></DashBordHome>,
          },
          {
            path: "/dashboard/profile",
            element: <DashProfile></DashProfile>,
          },
          {
            path: "/dashboard/edit-profile",
            element: <DashEfitProfile></DashEfitProfile>,
          },
          {
            path: "/dashboard/settings",
            element: <DashSetting></DashSetting>,
          },
        ],
      },
    ],
  },
]);

export default myCreatedRoute;
