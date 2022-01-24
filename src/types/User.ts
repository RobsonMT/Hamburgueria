export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpData {
  name: string;
  email: string;
  password: string;
  confirm_password?: string;
}
