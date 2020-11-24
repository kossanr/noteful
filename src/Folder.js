import React from "react";

import { Link } from "react-router-dom";

export default function Folder(props) {
  const { folders, addFolder } = props;

  return (
    <div className="folder">
      <ul>
        {folders.map((folder) => (
          <li key={folder.id}>
            {" "}
            <Link to={`/folder/${folder.id}`}>
              {" "}
              {/*Link to notes that match folders ID*/}
              <button type="button">{folder.name}</button>
            </Link>{" "}
          </li>
        ))}
        <button /*onClick={addFolder}*/ className="addFolder">
          {" "}
          Add folder
        </button>
      </ul>
    </div>
  );
}
