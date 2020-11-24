import React from "react";
import { Link } from "react-router-dom";

export default function Main(props) {
  //const { notes } = props;
  const notes = props.match.params.folderid
    ? props.notes.filter((n) => n.folderId === props.match.params.folderid)
    : props.notes;
  return (
    <div className="main">
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {" "}
            <Link to={`/note/${note.id}`}>{note.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
