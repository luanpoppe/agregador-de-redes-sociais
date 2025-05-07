import { Root } from "@/main";
import { createBrowserRouter } from "react-router";

import { Login } from "./Login";
import { Register } from "./Register";
import { dontLoadPageIfLoggedIn } from "@/utils/auth/auth.utils";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
  {
    path: "/login",
    Component: Login,
    loader: dontLoadPageIfLoggedIn,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
