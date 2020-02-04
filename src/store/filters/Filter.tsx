import React, { useState, Dispatch, useEffect } from "react";
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
  page: string | undefined;
}

const Filter = ({ filter, dispatch, options, page }: Props) => {
  const [openFeature, setOpenFeature] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);
  const [openColor, setOpenColor] = useState(false);

  useEffect(() => {
    setOpenFeature(false);
    setOpenBrand(false);
    setOpenColor(false);
  }, [page]);

  return (
    <div className="filter-window">
      <form className="form">
        <FilterSearch filter={filter} dispatch={dispatch} />
        <FilterTags filter={filter} dispatch={dispatch} />
        <div onClick={() => setOpenFeature(prevState => !prevState)}>
          <p>Features</p>
        </div>
        {openFeature && (
          <FilterFeature
            filter={filter}
            dispatch={dispatch}
            options={options.feature}
          />
        )}
        <div onClick={() => setOpenBrand(prevState => !prevState)}>
          <p>Brands</p>
        </div>
        {openBrand && (
          <FilterBrand
            filter={filter}
            dispatch={dispatch}
            options={options.brand}
          />
        )}
        <div onClick={() => setOpenColor(prevState => !prevState)}>
          <p>Color</p>
        </div>
        {openColor && (
          <FilterColor
            filter={filter}
            dispatch={dispatch}
            options={options.color}
          />
        )}
        <FilterPrice filter={filter} dispatch={dispatch} />
      </form>
    </div>
  );
};

export default Filter;
