import React from "react";
import Context from "../Context";
import config from "../config";
import "./AddNote.css";
import { Link } from "react-router-dom";

export default class AddNote extends React.Component {
  static contextType = Context;

  handleAddNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: this.context.notes.length,
      name: e.target.note_name.value,
      content: e.target.content.value,
      folderId:
    };
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",

      body: JSON.stringify(newNote),
    })
      .then((res) => res.json())
      .then((newFolder) => {
        this.context.addNote(newNote);
        e.target.reset();
        this.props.history.push("/");
      });
  };
  // <Link to={`/note/${newNote.id}`} />

  render() {
    return (
      <section className="add_note">
        <form onSubmit={this.handleAddNote}>
          <label htmlFor="new_note_name"> Note name: </label>
          <input
            required
            type="text"
            name="note_name"
            placeholder="Note Name"
          />
          <input type="text" name="content" placeholder="Note Details" />
          <button className="save_note_button" type="submit">
            Save
          </button>
        </form>
      </section>
    );
  }
}
