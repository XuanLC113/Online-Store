import React, { Dispatch } from "react";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
}

const Sort = ({ filter, dispatch }: Props) => {
  return (
    <div className="sort-window">
      <form>
        <label>Sort by </label>
        <select
          value={filter.sort}
          onChange={e => dispatch({ type: "sort", payload: e.target.value })}
        >
          <option value="alphabetical">Name</option>
          <option value="pricelo">Price (lo-hi)</option>
          <option value="pricehi">Price (hi-lo)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
