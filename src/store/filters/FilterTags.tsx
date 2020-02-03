import React, { Dispatch } from "react";
import Tag from "./Tag";

interface Props {
  filter: any;
  dispatch: Dispatch<any>;
}

const FilterTags = ({ filter, dispatch }: Props) => {
  const tagKeys: string[] = Object.keys(filter.filter);
  let tags = [];
  for (let key of tagKeys) {
    for (let tag of filter.filter[key]) {
      tags.push(
        <Tag key={key + tag} tag={tag} filterKey={key} dispatch={dispatch} />
      );
    }
  }
  return (
    <div>
      {tags.length !== 0 && (
        <button onClick={() => dispatch({ type: "reset" })}>clear all</button>
      )}
      {tags}
    </div>
  );
};

export default FilterTags;
