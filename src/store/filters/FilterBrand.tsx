import React, { Dispatch } from "react";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
  options: string[];
}

const FilterBrand = ({ filter, dispatch, options }: Props) => {
  return (
    <div>
      <p>brand</p>
      <div>
        {options.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              checked={filter.filter.brand.includes(option)}
              onChange={() => dispatch({ type: "brand", payload: option })}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterBrand;
