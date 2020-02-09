import React, { Dispatch } from "react";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
}

const FilterSearch = ({ filter, dispatch }: Props) => {
  return (
    <div className="filter-search">
      <label>
        <input
          type="text"
          value={filter.search}
          onChange={e => dispatch({ type: "search", payload: e.target.value })}
          placeholder="search..."
        />
      </label>
    </div>
  );
};

export default FilterSearch;
