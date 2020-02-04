import React, { Dispatch } from "react";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
  options: string[];
}

const FilterColor = ({ filter, dispatch, options }: Props) => {
  return (
    <div className="filter">
      <div>
        {options.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              checked={filter.filter.color.includes(option)}
              onChange={() => dispatch({ type: "color", payload: option })}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterColor;
