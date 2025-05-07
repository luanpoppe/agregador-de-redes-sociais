import axios from "axios";
import { apiUrl } from ".";

export async function createUser(body: User) {
  const res = await axios.post<UserWithoutPassword & TokensModel>(
    `${apiUrl}/users`,
    body
  );
  return res.data;
}

export async function loginUser(body: LoginBody) {
  const res = await axios.post<UserWithoutPassword & TokensModel>(
    `${apiUrl}/login`,
    body
  );
  return res.data;
}

export async function renewToken(body: { token: string }) {
  const res = await axios.post<{ accessToken: string }>(
    `${apiUrl}/new-token`,
    body
  );
  return res.data;
}

export async function checkToken(body: {
  accessToken?: string;
  refreshToken?: string;
}) {
  const res = await axios.post<{ isValid: boolean }>(
    `${apiUrl}/check-token`,
    body
  );
  return res.data;
}
