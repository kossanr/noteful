import React from "react";
import { Link } from "react-router-dom";

export default function Note(props) {
  return (
    <div className="Note">
      <h2 className="Note_title">
        {/* <Link to={`/note/${props.id}`}>{props.name}</Link> */}
        <p> Notes </p>
      </h2>
      <button className="Note__delete" type="button">
        delete
      </button>
    </div>
  );
}
