import { Root } from "@/main";
import { createBrowserRouter } from "react-router";
import { Login } from "./Login";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
  {
    path: "/login",
    Component: Login,
  },
]);
