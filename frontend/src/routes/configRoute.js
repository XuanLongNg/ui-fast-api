import { LayoutProps } from "antd";
import { Navigate, RouteObject } from "react-router";
import { AppRoutes } from "./appRoutes";
import Post from "../components/fastApi/post";
export const ConfigRoutes = [
  {
    element: <Post />,
    path: AppRoutes.POST,
    index: true,
  },
  {
    path: "*",
    element: <Navigate to={AppRoutes.NOT_FOUND} />,
  },
];
