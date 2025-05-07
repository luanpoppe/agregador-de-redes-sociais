import { Root } from "@/main";
import { createBrowserRouter } from "react-router";

import { Login } from "./Login";
import { Register } from "./Register";
import {
  dontLoadPageIfLoggedIn,
  loadPageIfLoggedIn,
} from "@/utils/auth/auth.utils";
import { Home } from "./Home";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: dontLoadPageIfLoggedIn,
  },
  {
    path: "/home",
    Component: Home,
    loader: loadPageIfLoggedIn,
  },
  {
    path: "/login",
    Component: Login,
    loader: dontLoadPageIfLoggedIn,
  },
  {
    path: "/register",
    Component: Register,
    loader: dontLoadPageIfLoggedIn,
  },
]);
