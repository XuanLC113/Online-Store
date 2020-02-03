export interface IProductData {
  id: number;
  sku: number;
  title: string;
  type: string;
  feature: string[];
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
    feature: string[];
    brand: string[];
    color: string[];
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
