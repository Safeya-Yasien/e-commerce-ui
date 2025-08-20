export interface IProduct {
  id: number;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: {
    [key: string]: string;
  };
}