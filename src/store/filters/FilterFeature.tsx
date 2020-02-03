import React, { Dispatch } from "react";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
  options: string[];
}

const FilterFeature = ({ filter, dispatch, options }: Props) => {
  return (
    <div>
      <div>
        {options.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              checked={filter.filter.feature.includes(option)}
              onChange={() => dispatch({ type: "feature", payload: option })}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterFeature;
