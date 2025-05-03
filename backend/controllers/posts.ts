import { Response, Request } from "express";

const posts = [
  { user: "Kyle", title: "Post 1" },
  { user: "Jim", title: "Post 2" },
];

export function getPosts(req: Request, res: Response) {
  //@ts-ignore
  res.json(posts.filter((p) => p.user === req.user.name));
}
