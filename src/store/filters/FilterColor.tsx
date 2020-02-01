import React, { Dispatch } from "react";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
  options: string[];
}

const FilterColor = ({ filter, dispatch, options }: Props) => {
  return (
    <div>
      <p>color</p>
      <div>
        {options.map(option => (
          <label>
            <input
              type="checkbox"
              checked={filter.filter.color[option]}
              onChange={() => dispatch({ type: "color", color: option })}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterColor;
