import React, { Dispatch } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Tag.css";

interface Props {
  tag: string | number[];
  filterKey: string;
  dispatch: Dispatch<any>;
}

const Tag = ({ tag, filterKey, dispatch }: Props) => {
  return (
    <div
      className="tag"
      onClick={() => dispatch({ type: filterKey, payload: tag })}
    >
      {typeof tag === "string" ? (
        <p>{tag}</p>
      ) : (
        <p>
          ${tag[0]} - ${tag[1]}
        </p>
      )}

      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};

export default Tag;
