import React, { Dispatch } from "react";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
}

const FilterSearch = ({ filter, dispatch }: Props) => {
  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            value={filter.search}
            onChange={e =>
              dispatch({ type: "search", payload: e.target.value })
            }
          />
          Search
        </label>
      </form>
    </div>
  );
};

export default FilterSearch;
