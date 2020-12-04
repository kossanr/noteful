import React, { Component } from "react";
import Context from "./Context";

export default class Note extends React.Component {
  static contextType = Context;
  render() {
    const note =
      this.context.notes.find((n) => n.id === this.props.match.params.noteId) ||
      {};
    return (
      <section className="Note">
        <div className="Note_title">
          <h2>{note.name}</h2>
          <p>{note.content}</p>
        </div>
        <button className="Note__delete" type="button">
          delete
        </button>
      </section>
    );
  }
}
