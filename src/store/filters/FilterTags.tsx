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
  for (let i of filter.price) {
    tags.push(
      <Tag key={i[0]} tag={i} filterKey={"price"} dispatch={dispatch} />
    );
  }
  return (
    <div className="filter-tags">
      {tags.length !== 0 ? (
        <>
          <div className="tags">{tags}</div>
          <button onClick={() => dispatch({ type: "reset" })}>clear</button>
        </>
      ) : (
        <div className="empty-filter-tag" />
      )}
    </div>
  );
};

export default FilterTags;
