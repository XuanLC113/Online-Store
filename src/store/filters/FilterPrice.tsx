import React, { Dispatch } from "react";
import "./FilterPrice.css";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
}

const FilterPrice = ({ filter, dispatch }: Props) => {
  return (
    <div className="priceRangeSlider">
      ${filter.price1} - ${filter.price2}
      <br />
      <label>
        <input
          type="range"
          min="0"
          max="99"
          value={filter.price1}
          onChange={e => dispatch({ type: "price1", payload: e.target.value })}
        />
        <input
          type="range"
          min="1"
          max="100"
          value={filter.price2}
          onChange={e => dispatch({ type: "price2", payload: e.target.value })}
        />
      </label>
    </div>
  );
};

export default FilterPrice;
