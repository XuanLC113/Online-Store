import React, { useState, Dispatch, useEffect } from "react";
import FilterSearch from "./filteroptions/FilterSearch";
import FilterFeature from "./filteroptions/FilterFeature";
import FilterColor from "./filteroptions/FilterColor";
import FilterBrand from "./filteroptions/FilterBrand";
import FilterPrice from "./filteroptions/FilterPrice";
import "./Filter.css";
import OpenFilter from "./filteroptions/OpenFilter";

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
  const [openPrice, setOpenPrice] = useState(false);

  useEffect(() => {
    setOpenFeature(false);
    setOpenBrand(false);
    setOpenColor(false);
    setOpenPrice(false);
  }, [page]);

  if (window.innerWidth <= 600) {
    return (
      <div className="filter-window">
        <form>
          <FilterSearch filter={filter} dispatch={dispatch} />
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
          <OpenFilter
            name="Price"
            open={openPrice}
            setOpen={() => setOpenPrice(prevState => !prevState)}
          />
          {openPrice && <FilterPrice filter={filter} dispatch={dispatch} />}
        </form>
      </div>
    );
  } else {
    return (
      <div className="filter-window">
        <div className="filter-section">
          <h2>Features</h2>
          <FilterFeature
            filter={filter}
            dispatch={dispatch}
            options={options.feature}
          />
        </div>
        <span className="filter-seperator" />
        <div className="filter-section">
          <h2>Brands</h2>
          <FilterBrand
            filter={filter}
            dispatch={dispatch}
            options={options.brand}
          />
        </div>
        <span className="filter-seperator" />
        <div className="filter-section">
          <h2>Colors</h2>
          <FilterColor
            filter={filter}
            dispatch={dispatch}
            options={options.color}
          />
        </div>
        <span className="filter-seperator" />
        <div className="filter-section">
          <h2>Price</h2>
          <FilterPrice filter={filter} dispatch={dispatch} />
        </div>
      </div>
    );
  }
};

export default Filter;
