import { Root } from "@/main";
import { createBrowserRouter } from "react-router";

import { Login } from "./Login";
import { Register } from "./Register";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
