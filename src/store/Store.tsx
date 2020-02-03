import React, { useState, useEffect, Dispatch } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import * as products_data from "../data/products.json";
import ProductWindow from "./products/ProductWindow";
import Filter from "./filters/Filter";
import Sort from "./Sort";
import { IProductData, IData, IFilterCriterion } from "../data/Interfaces";
import {
  basicFilter,
  searchFilter,
  priceFilter,
  sortFilter,
  setFilterOptions
} from "./FilterLogic";
import "./store.css";

interface Params extends RouteComponentProps<{ type?: string }> {
  filter: any;
  dispatch: Dispatch<any>;
}

const initialFilterOptions: IFilterCriterion = {
  style: [],
  brand: [],
  color: []
};

const Store: React.FC<Params> = props => {
  const { data }: IData = products_data;
  const [products, setProducts] = useState(data);
  const [options, setOptions] = useState(initialFilterOptions);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(props.filter));
  }, [props.filter]);

  useEffect(() => {
    const type = props.match.params.type;
    let products = data.filter(item => item.type === type);
    let options = setFilterOptions(products);
    setOptions(options);
  }, [props.match.params.type, data]); //data

  useEffect(() => {
    const filterCriterion: IFilterCriterion = props.filter.filter;
    const filterKeys: string[] = Object.keys(filterCriterion);
    const type = props.match.params.type;

    //filter by type
    let products = data.filter(item => item.type === type);

    let productFilter: IProductData[] = basicFilter(
      products,
      filterKeys,
      filterCriterion
    );

    productFilter = searchFilter(productFilter, props.filter);

    productFilter = priceFilter(productFilter, props.filter);

    productFilter = sortFilter(productFilter, props.filter);

    setProducts(productFilter);
  }, [props.filter, props.match.params.type, data]); //data

  return (
    <div>
      <h1>{props.match.params.type}</h1>
      <Filter
        filter={props.filter}
        dispatch={props.dispatch}
        options={options}
      />
      <Sort filter={props.filter} dispatch={props.dispatch} />
      <ProductWindow products={products} type={props.match.params.type} />
    </div>
  );
};

export default withRouter(Store);
