declare type User = UserWithoutPassword & {
  password: string;
};

declare type UserWithoutPassword = {
  id?: number;
  name: string;
  email: string;
};

declare type LoginBody = {
  email: string;
  password: string;
};
