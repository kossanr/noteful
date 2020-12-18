import React from "react"; //{ Component, useCallback }
import Context from "../Context";
import "./Note.css";
import config from "../config";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default class Note extends React.Component {
  static contextType = Context;
  //write fetch logic for DELETE request
  //use a callback context value to update the state

  handleClickDelete = (e) => {
    e.preventDefault();
    const { noteId = "" } = this.props.match.params || "";
    // params exists, noteId exists inside of params
    // params exists, but noteId doesn't
    // params doesn't even exist
    //value of noteId
    //if delete is successful, redirect to the / path
    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          //get the error msg from response
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        // remove it from state
        this.context.handleDeleteNote(noteId);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const note =
      this.context.notes.find((n) => n.id === this.props.match.params.noteId) ||
      {};

    return note.name ? (
      <section className="Note">
        <div className="Note_title">
          <h2>{note.name}</h2>
          <p>{note.content}</p>
        </div>
        <button
          onClick={this.handleClickDelete}
          className="Note__delete"
          type="button"
        >
          delete
        </button>
      </section>
    ) : (
      <Redirect to="/" />
    );
  }
}

Note.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};
