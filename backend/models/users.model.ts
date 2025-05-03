export type User = {
  id?: number;
  name: string;
  email: string;
  password: string;
};

export type UserWithoutPassword = {
  id?: number;
  name: string;
  email: string;
};

export type LoginBody = {
  email: string;
  password: string;
};
