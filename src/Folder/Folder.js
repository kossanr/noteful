import React, { useContext } from "react";
import Context from "../Context";
import { Link } from "react-router-dom";
import "./Folder.css";
import AddFolder from "../AddFolder/AddFolder";

export default function Folder(props) {
  const context = useContext(Context);

  return (
    <div className="folder">
      <ul className="folders">
        {context.folders.map((folder) => (
          <li key={folder.id}>
            {" "}
            <Link to={`/folder/${folder.id}`}>
              {" "}
              <button type="button">{folder.name}</button>
            </Link>{" "}
          </li>
        ))}
        <Link to="/addfolder">
          <button className="addFolder">Add Folder</button>
        </Link>

        {/* <button onClick={context.addFolder} className="addFolder">
          {" "}
          Add folder
        </button> */}
      </ul>
    </div>
  );
}
