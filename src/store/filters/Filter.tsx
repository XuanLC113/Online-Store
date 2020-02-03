import React, { Dispatch } from "react";
import FilterSearch from "./FilterSearch";
import FilterFeature from "./FilterFeature";
import FilterColor from "./FilterColor";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterTags from "./FilterTags";

interface FilterCriterion {
  feature: string[];
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
        <FilterTags filter={filter} dispatch={dispatch} />
        <FilterSearch filter={filter} dispatch={dispatch} />
        <FilterFeature
          filter={filter}
          dispatch={dispatch}
          options={options.feature}
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
