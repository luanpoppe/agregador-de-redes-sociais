import { Root } from "@/main";
import { createBrowserRouter, redirect } from "react-router";

import { Login } from "./Login";
import { Register } from "./Register";
import { AuthTokensEnum } from "@/utils/enums/auth.enum";
import { renewToken } from "@/service/user.service";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
  {
    path: "/login",
    Component: Login,
    loader: async () => {
      const { authToken, refreshToken }: TokensModel = {
        authToken: localStorage.getItem(AuthTokensEnum.AUTH_TOKEN) ?? "",
        refreshToken: localStorage.getItem(AuthTokensEnum.REFRESH_TOKEN) ?? "",
      };

      if (!authToken && !refreshToken) return;
      if (refreshToken && !authToken) {
        const res = await renewToken({ token: refreshToken });
        if (!res) return;
        if (res) {
          localStorage.setItem(AuthTokensEnum.AUTH_TOKEN, res.accessToken);
          return redirect("/");
        }
      }
      return redirect("/");
    },
  },
  {
    path: "/register",
    Component: Register,
  },
]);
