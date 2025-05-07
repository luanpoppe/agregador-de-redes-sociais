import { redirect } from "react-router";
import { AuthTokensEnum } from "../enums/auth.enum";
import { checkToken, renewToken } from "@/service/user.service";

export async function dontLoadPageIfLoggedIn() {
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
  if (authToken) {
    const { isValid } = await checkToken({
      accessToken: authToken,
      refreshToken,
    });

    if (isValid) return redirect("/");
    else return;
  }
  return redirect("/");
}
