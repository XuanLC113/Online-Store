export interface IProductData {
  id: number;
  sku: number;
  title: string;
  type: string;
  style: string;
  brand: string;
  color: string[];
  price: number;
  [key: string]: any;
}

export interface IData {
  data: IProductData[];
}

export type IFilter = {
  search: string | number;
  price1: number;
  price2: number;
  sort: string;
  filter: {
    style: string[];
    brand: string[];
    color: string[];
  };
};

export interface IFilterCriterion {
  style: string[];
  brand: string[];
  color: string[];
  [key: string]: string[];
}

export interface ICart {
  product: IProductData;
  color: string;
  qty: number;
}
