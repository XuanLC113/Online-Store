import React, { Dispatch } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Tag.css";

interface Props {
  tag: string;
  filterKey: string;
  dispatch: Dispatch<any>;
}

const Tag = ({ tag, filterKey, dispatch }: Props) => {
  return (
    <div
      className="tag"
      onClick={() => dispatch({ type: filterKey, payload: tag })}
    >
      <p>{tag}</p>
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};

export default Tag;
