import React, { useState, useReducer, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import * as products_data from "../data/products.json";
import { filters as initialFilters, reducer } from "./filters/FilterReducer";
import ProductWindow from "./products/ProductWindow";
import Filter from "./filters/Filter";
import Sort from "./Sort";
import {
  IProductData,
  IData,
  IFilter,
  IFilterCriterion
} from "../data/Interfaces";
import "./store.css";

interface Params extends RouteComponentProps<{ type?: string }> {}

const initialFilterOptions: IFilterCriterion = {
  type: [],
  style: [],
  brand: [],
  color: []
};

function basicFilter(
  products: IProductData[],
  filterKeys: string[],
  filterCriterion: IFilterCriterion
): IProductData[] {
  return products.filter(item => {
    return filterKeys.every(key => {
      if (filterCriterion[key].length === 0) {
        return true;
      }
      return filterCriterion[key].some(subkey => item[key].includes(subkey));
    });
  });
}

function searchFilter(
  product: IProductData[],
  filter: IFilter
): IProductData[] {
  return product.filter(item =>
    item.title.toLowerCase().includes(filter.search.toString().toLowerCase())
  );
}

function priceFilter(product: IProductData[], filter: IFilter): IProductData[] {
  return product.filter(
    item => item.price >= filter.price1 && item.price <= filter.price2
  );
}

function sortFilter(products: IProductData[], filter: IFilter): IProductData[] {
  switch (filter.sort) {
    case "alphabetical":
      return products.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    case "pricelo":
      return products.sort((a, b) => a.price - b.price);
    case "pricehi":
      return products.sort((a, b) => b.price - a.price);
    default:
      return [];
  }
}

function setFilters(filter: IFilter): IFilterCriterion {
  const filterCriterion: IFilterCriterion = {
    type: [],
    style: [],
    brand: [],
    color: []
  };
  const filters: { [key: string]: object } = filter.filter;
  for (let key in filters) {
    let subFilter: { [key: string]: any } = filters[key];
    for (let subkey in subFilter) {
      let itemFilter: { [key: string]: boolean } = subFilter[subkey];
      if (itemFilter) {
        filterCriterion[key].push(subkey);
      }
    }
  }
  return filterCriterion;
}

//set filter options for current store listing
function setFilterOptions(products: IProductData[]) {
  const options: IFilterCriterion = {
    type: [],
    style: [],
    brand: [],
    color: []
  };
  for (let product of products) {
    for (let key in options) {
      if (typeof product[key] !== "string") {
        for (let i of product[key]) {
          if (!options[key].includes(i)) {
            options[key].push(i);
          }
        }
      } else if (!options[key].includes(product[key])) {
        options[key].push(product[key]);
      }
    }
  }
  return options;
}

const Store: React.FC<Params> = props => {
  const { data }: IData = products_data;
  const [products, setProducts] = useState(data);
  const [options, setOptions] = useState(initialFilterOptions);
  const [filter, dispatch] = useReducer(reducer, initialFilters);

  useEffect(() => {
    dispatch({ type: "reset" });
    const type = props.match.params.type;
    let products = data.filter(item => item.type === type);
    let options = setFilterOptions(products);
    setOptions(options);
  }, [props.match.params.type]);

  useEffect(() => {
    const filterCriterion: IFilterCriterion = setFilters(filter);
    const filterKeys: string[] = Object.keys(filterCriterion);
    const type = props.match.params.type;

    //filter by type
    let products = data.filter(item => item.type === type);

    let productFilter: IProductData[] = basicFilter(
      products,
      filterKeys,
      filterCriterion
    );

    productFilter = searchFilter(productFilter, filter);

    productFilter = priceFilter(productFilter, filter);

    productFilter = sortFilter(productFilter, filter);

    setProducts(productFilter);
  }, [filter, props.match.params.type]);

  return (
    <div>
      <h1>{props.match.params.type}</h1>
      <Filter filter={filter} dispatch={dispatch} options={options} />
      <Sort filter={filter} dispatch={dispatch} />
      <ProductWindow products={products} type={props.match.params.type} />
    </div>
  );
};

export default Store;
