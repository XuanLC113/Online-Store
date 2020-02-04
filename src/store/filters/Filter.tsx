import React, { useState, Dispatch, useEffect } from "react";
import FilterSearch from "./FilterSearch";
import FilterFeature from "./FilterFeature";
import FilterColor from "./FilterColor";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterTags from "./FilterTags";
import "./Filter.css";
import OpenFilter from "./OpenFilter";

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
      <form>
        <FilterSearch filter={filter} dispatch={dispatch} />
        <FilterTags filter={filter} dispatch={dispatch} />
        <OpenFilter
          name="Features"
          open={openFeature}
          setOpen={() => setOpenFeature(prevState => !prevState)}
        />
        {openFeature && (
          <FilterFeature
            filter={filter}
            dispatch={dispatch}
            options={options.feature}
          />
        )}
        <OpenFilter
          name="Brand"
          open={openBrand}
          setOpen={() => setOpenBrand(prevState => !prevState)}
        />
        {openBrand && (
          <FilterBrand
            filter={filter}
            dispatch={dispatch}
            options={options.brand}
          />
        )}
        <OpenFilter
          name="Color"
          open={openColor}
          setOpen={() => setOpenColor(prevState => !prevState)}
        />
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
