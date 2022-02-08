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

export interface IProductInStock {
  name: string;
  category: string;
  price: number;
  image: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
  userId: number;
}
