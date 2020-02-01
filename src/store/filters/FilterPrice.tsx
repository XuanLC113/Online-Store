import React, { Dispatch } from "react";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
}

const FilterPrice = ({ filter, dispatch }: Props) => {
  return (
    <div>
      <form>
        <label>
          <input
            type="range"
            min="0"
            max="99"
            value={filter.price1}
            onChange={e => dispatch({ type: "price1", price: e.target.value })}
          />
          <input
            type="range"
            min="1"
            max="100"
            value={filter.price2}
            onChange={e => dispatch({ type: "price2", price: e.target.value })}
          />
          ${filter.price1} - ${filter.price2}
        </label>
      </form>
    </div>
  );
};

export default FilterPrice;
