import React, { Dispatch } from "react";
import "./FilterPrice.css";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
}

const FilterPrice = ({ filter, dispatch }: Props) => {
  function check(range: number[]): boolean {
    for (let i of filter.price) {
      if (i[0] === range[0]) {
        return true;
      }
    }
    return false;
  }
  return (
    <div className="filter-price">
      <div
        className="filter-inputs"
        onClick={() => dispatch({ type: "price", payload: [0, 50] })}
      >
        <input type="checkbox" checked={check([0, 50])} />
        <label key={1}>0 - 50</label>
      </div>
      <div
        className="filter-inputs"
        onClick={() => dispatch({ type: "price", payload: [51, 100] })}
      >
        <input type="checkbox" checked={check([51, 100])} />
        <label key={1}>51 - 100</label>
      </div>
      <div
        className="filter-inputs"
        onClick={() => dispatch({ type: "price", payload: [101, 150] })}
      >
        <input type="checkbox" checked={check([101, 150])} />
        <label key={1}>101 - 150</label>
      </div>
      <div
        className="filter-inputs"
        onClick={() => dispatch({ type: "price", payload: [151, 200] })}
      >
        <input type="checkbox" checked={check([151, 200])} />
        <label key={1}>151 - 200</label>
      </div>
    </div>
  );
};

export default FilterPrice;
