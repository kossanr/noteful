import React from "react";
import Notes from "./Notes";
import Main from "./Main";
import Folder from "./Folder";
import Note from "./Note";
import { Route, Link } from "react-router-dom";
export default class App extends React.Component {
  state = Notes;

  render() {
    return (
      <div className="app">
        <header className="App">
          <h1>
            <Link to="/">Noteful</Link>
          </h1>{" "}
        </header>

        <Route
          path="/"
          render={(props) => <Main {...props} state={this.state} />}
        />
        {/* <Route
          path="/folder/:folderId"
          render={(props) => <Folder {...props} state={this.state} />}
        /> */}

        <Route path="/note/:noteId" component={Note} />
      </div>
    );
  }
}
//State lives in APP component
//each route will have the same header section
//Apps title will be <Link /> to MAIN route

//MAIN
//displayed when path is "/"
//Display all available notes (Notes shows name and modified date)
//Sidebar will display list of folders with none selected

//FOLDER
//dynamic route
//displayed when path is "/folder/:folderID"
//folderID: an id of the folders in state
//main section dislays notes that are "in" that selected folder
//sidebar should display the folder list with the selected folder highlighted

//NOTE
//dynamic route
//path '/note/:noteID'
//noteID: id of ONE of the notes in state
//main section displays currently selected notes name, modified date, and content
//sidebar displays folder of the cirrectly selected note as well as a back button
