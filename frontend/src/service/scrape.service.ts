import axios from "axios";
import { apiUrl } from ".";

export async function getPosts(channelName: string) {
  const res = await axios.get<Post[]>(`${apiUrl}/scrape/yt?yt=${channelName}`);
  return res.data;
}
