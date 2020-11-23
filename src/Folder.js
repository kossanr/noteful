import React from "react";
import { Link } from "react-router-dom";

export default function Folder(props) {
  const { state } = props;

  return (
    <div className="folder">
      <ul>
        {state.folders.map((folder) => (
          <li key={folder.id}>{folder.name}</li>
        ))}
      </ul>
    </div>
  );
}
