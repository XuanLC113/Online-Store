import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  name: string;
  open: boolean;
  setOpen: () => void;
}

const OpenFilter = ({ name, open, setOpen }: Props) => {
  return (
    <div className="open-filter" onClick={setOpen}>
      <h2>{name}</h2>
      {open ? (
        <FontAwesomeIcon icon={faChevronUp} />
      ) : (
        <FontAwesomeIcon icon={faChevronDown} />
      )}
    </div>
  );
};

export default OpenFilter;
