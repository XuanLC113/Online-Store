export interface IProductData {
  id: number;
  sku: number;
  title: string;
  type: string;
  feature: string[];
  brand: string;
  color: string[];
  image: string[];
  price: number;
  [key: string]: any;
}

export type IFilter = {
  search: string | number;
  price: number[][];
  sort: string;
  filter: {
    feature: string[];
    brand: string[];
    color: string[];
    [key: string]: string[];
  };
};

export interface IFilterCriterion {
  feature: string[];
  brand: string[];
  color: string[];
  [key: string]: string[];
}

export interface ICart {
  product: IProductData;
  color: string;
  qty: number;
}
