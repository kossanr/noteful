import React, { Component } from "react";
import Context from "../Context";
import "./AddFolder.css";
import config from "../config";

export default class AddFolder extends React.Component {
  static contextType = Context;

  handleAddFolder = (e) => {
    e.preventDefault();
    //fetch logic for adding folders to API?
    const newFolder = {
      id: this.context.folders.length,
      name: e.target.folder_name.value,
    };
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFolder),
    })
      .then((res) => res.json())
      .then((newFolder) => {
        this.context.addFolder(newFolder);
        e.target.reset();
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <section className="add_folder">
        <form onSubmit={this.handleAddFolder}>
          <label htmlFor="foldername"> Folder name: </label>
          <input
            required
            type="text"
            name="folder_name"
            placeholder="Folder Name"
          />
          <button className="save_button" type="submit">
            Save
          </button>
        </form>
      </section>
    );
  }
}