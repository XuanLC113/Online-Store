import React, { Dispatch } from "react";
import FilterSearch from "./FilterSearch";
import FilterStyle from "./FilterStyle";
import FilterColor from "./FilterColor";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";

interface FilterCriterion {
  type: string[];
  style: string[];
  brand: string[];
  color: string[];
  [key: string]: string[];
}

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
  options: FilterCriterion;
}

const Filter = ({ filter, dispatch, options }: Props) => {
  return (
    <div className="filter-window">
      <form>
        <FilterSearch filter={filter} dispatch={dispatch} />
        <FilterStyle
          filter={filter}
          dispatch={dispatch}
          options={options.style}
        />
        <FilterBrand
          filter={filter}
          dispatch={dispatch}
          options={options.brand}
        />
        <FilterColor
          filter={filter}
          dispatch={dispatch}
          options={options.color}
        />
        <FilterPrice filter={filter} dispatch={dispatch} />
      </form>
    </div>
  );
};

export default Filter;
