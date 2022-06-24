interface CommentTS {
  name: string;
  descriotion: string;
  img: string;
  id?: any;
  date: any;
}
export interface Asset {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sale: number;
  count: number;
  years: number;
  color: string;
  comment?: CommentTS[];
}
interface Basket {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sale: number;
  count: number;
  years: number;
  color: string;
}
export interface initialTS {
  sum: number;
  product: Asset[];
  basket: Basket[];
  buy: any;
}
