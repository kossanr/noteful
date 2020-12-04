import React, { useContext } from "react";
import Context from "./Context";
import { Link } from "react-router-dom";

export default function Folder(props) {
  const context = useContext(Context);

  return (
    <div className="folder">
      <ul>
        {context.folders.map((folder) => (
          <li key={folder.id}>
            {" "}
            <Link to={`/folder/${folder.id}`}>
              {" "}
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
