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

export interface IFilter {
  search: string | number;
  price1: number;
  price2: number;
  sort: string;
  filter: {
    brand: {
      jbl: boolean;
      long: boolean;
      none: boolean;
    };
    color: {
      black: boolean;
      blue: boolean;
      green: boolean;
      gray: boolean;
      plaid: boolean;
      red: boolean;
      [key: string]: boolean;
    };
  };
}

export interface IFilterCriterion {
  type: string[];
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
