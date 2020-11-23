import React from "react";
import Folder from "./Folder";
import { Route, Link } from "react-router-dom";

export default function Main(props) {
  const { state } = props;
  return (
    <div className="Main">
      <p> MAIN</p>
      <aside>
        <Route path="/" component={Folder} />
      </aside>
      <ul>
        {state.notes.map((note, idx) => (
          <li key={note.id}>
            {" "}
            <Link to={`/note/${note.id}`}>{note.name}</Link>
            Date: {note.modified}
          </li>
        ))}
      </ul>
    </div>
  );
}
