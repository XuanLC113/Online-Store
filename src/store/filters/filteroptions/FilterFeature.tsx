import React, { Dispatch } from "react";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
  options: string[];
}

const FilterFeature = ({ filter, dispatch, options }: Props) => {
  return (
    <div className="filter">
      {options.map(option => (
        <div
          className="filter-inputs"
          onClick={() => dispatch({ type: "feature", payload: option })}
        >
          <input
            type="checkbox"
            checked={filter.filter.feature.includes(option)}
          />
          <label key={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterFeature;
