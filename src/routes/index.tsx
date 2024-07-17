import Authentication from "../features/auth";
import Detail from "../features/detail";
import Home from "../features/home";
import Layout from "../assets/component/layout";
import Movie from "../features/popular";
import ProtectedRoutes from "./protected-routes";
import Toprated from "../features/top-rated";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/detail/:id",
            element: <Detail />,
          },
          {
            path: "/movie",
            element: <Movie />,
          },
          {
            path: "/toprated",
            element: <Toprated />,
          },
          {
            path: "/login",
            element: <Authentication />
          },
        ],
      }
    ]
  },
]);
