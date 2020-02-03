import React, { Dispatch } from "react";

interface Props {
  tag: string;
  filterKey: string;
  dispatch: Dispatch<any>;
}

const Tag = ({ tag, filterKey, dispatch }: Props) => {
  return (
    <div>
      <p onClick={() => dispatch({ type: filterKey, payload: tag })}>{tag}</p>
    </div>
  );
};

export default Tag;
