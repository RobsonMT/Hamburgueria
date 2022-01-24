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
