export interface IProduct {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: {
    [key: string]: string;
  };
}