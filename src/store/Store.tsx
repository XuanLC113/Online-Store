import React, { useState, useEffect, Dispatch } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import * as products_data from "../data/products.json";
import { IFilterCriterion, IProductData } from "../data/Interfaces";
import { applyFilter, setFilterOptions } from "./FilterLogic";
import "./store.css";
import StoreBar from "./StoreBar";
import ProductListing from "./productlisting/ProductListing";

interface Params extends RouteComponentProps<{ type?: string }> {
  filter: any;
  dispatch: Dispatch<any>;
}

const initialFilterOptions: IFilterCriterion = {
  feature: [],
  brand: [],
  color: []
};

const Store: React.FC<Params> = props => {
  const data: IProductData[] = products_data.data;
  const [products, setProducts] = useState(data);
  const [options, setOptions] = useState(initialFilterOptions);

  //put filters into localstorage
  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(props.filter));
  }, [props.filter]);

  //list of filter options for each product type
  useEffect(() => {
    const type = props.match.params.type;
    let products = data.filter(item => item.type === type);
    let options = setFilterOptions(products);
    setOptions(options);
  }, [props.match.params.type, data]);

  //run filter
  useEffect(() => {
    const filterCriterion: IFilterCriterion = props.filter.filter;
    const filterKeys: string[] = Object.keys(filterCriterion);
    const type = props.match.params.type;

    let productFilter = applyFilter(
      data,
      filterKeys,
      filterCriterion,
      props.filter,
      type
    );

    setProducts(productFilter);
  }, [props.filter, props.match.params.type, data]);

  return (
    <div className="store">
      <StoreBar
        filter={props.filter}
        dispatch={props.dispatch}
        options={options}
        page={props.match.params.type}
      />
      <ProductListing products={products} type={props.match.params.type} />
    </div>
  );
};

export default withRouter(Store);
