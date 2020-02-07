import React, { Dispatch, useState, useEffect } from "react";
import Filter from "./filters/Filter";
import FilterTags from "./filters/FilterTags";
import Sort from "./filters/Sort";

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

const StoreBar = ({ filter, dispatch, options, page }: Props) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filterBar, setFilterBar] = useState(false);
  useEffect(() => {
    if (openFilter) {
      setFilterBar(true);
    } else {
      setFilterBar(false);
    }
    const keys: string[] = Object.keys(filter.filter);
    for (let subkey of keys) {
      for (let i of filter.filter[subkey]) {
        if (i.length !== 0) {
          setFilterBar(true);
        }
      }
    }

    if (filter.price.length !== 0) {
      setFilterBar(true);
    }
  }, [openFilter]);
  return (
    <div className="store-bar">
      <div className="filter-bar">
        <p onClick={() => setOpenFilter(prevState => !prevState)}>filter</p>
        <h1>{page}</h1>
        <Sort filter={filter} dispatch={dispatch} />
      </div>
      {filterBar ? <FilterTags filter={filter} dispatch={dispatch} /> : null}
      {openFilter && (
        <>
          <Filter
            filter={filter}
            dispatch={dispatch}
            options={options}
            page={page}
          />
        </>
      )}
    </div>
  );
};

export default StoreBar;
