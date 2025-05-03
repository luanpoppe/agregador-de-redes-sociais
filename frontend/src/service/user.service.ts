import axios from "axios";
import { apiUrl } from ".";
import { TokensModel } from "@/models/auth";

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
