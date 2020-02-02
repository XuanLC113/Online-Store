import React, { Dispatch } from "react";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
  options: string[];
}

const FilterStyle = ({ filter, dispatch, options }: Props) => {
  return (
    <div>
      <p>style</p>
      <div>
        {options.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              checked={filter.filter.style[option]}
              onChange={() => dispatch({ type: "style", style: option })}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterStyle;
