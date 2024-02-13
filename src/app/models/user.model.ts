export interface User {
  id: number;
  isAdmin: boolean;
  nickname: string;
  email: string;
}

export interface RegisterForm {
  nickname: string;
  email: string;
  password: string;
}
