import React from "react";
import Context from "../Context";
import config from "../config";
import "./AddNote.css";
import { Link } from "react-router-dom";

export default class AddNote extends React.Component {
  static contextType = Context;
  state = {
    error: "",
  };

  handleAddNote = (e) => {
    e.preventDefault();
    if (e.target.folder.value === "") {
      alert("Please select a folder");
    } else {
      const newNote = {
        name: e.target.note_name.value,
        content: e.target.content.value,
        folderId: e.target.folder.value,
        modified: new Date(),
      };
      fetch(`${config.API_ENDPOINT}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      })
        .then((res) => res.json())
        .then((newNote) => {
          this.context.addNote(newNote);
          e.target.reset();
          this.props.history.push("/");
        })
        .catch((error) => {
          this.setState({ error: "Something went wrong, try again later" });
        });
    }
  };

  render() {
    return (
      <section className="add_note">
        <form onSubmit={this.handleAddNote}>
          {this.state.error !== "" && (
            <p className="error">{this.state.error}</p>
          )}
          <p>
            <label htmlFor="new_note_name"> Note name: </label>
            <input
              required
              type="text"
              name="note_name"
              placeholder="Note Name"
            />
          </p>
          <p>
            <label htmlFor="content">Content:</label>
            <input type="text" name="content" placeholder="Note Details" />
          </p>
          <p>
            <select name="folder">
              <option value="">Select Folder</option>
              {this.context.folders.map((folder) => (
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>
          </p>

          <button className="save_note_button" type="submit">
            Save
          </button>
        </form>
      </section>
    );
  }
}
