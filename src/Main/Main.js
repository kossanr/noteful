import React from "react";
import Context from "../Context";
import { Link } from "react-router-dom";
import "./Main.css";

export default class Main extends React.Component {
  static contextType = Context;

  render() {
    const { props, context } = this;
    const notes = props.match.params.folderid
      ? context.notes.filter((n) => n.folderId === props.match.params.folderid)
      : context.notes;
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

        <Link to="/AddNote">
          <button className="add_note">Add Note</button>
        </Link>
      </div>
    );
  }
}
Main.propTypes = {};
