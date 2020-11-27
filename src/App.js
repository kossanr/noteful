import React from "react";
import data from "./data";
import Main from "./Main";
import Folder from "./Folder";
import Note from "./Note";
import { Route, Link } from "react-router-dom";
import "./App.css";

export default class App extends React.Component {
  state = data;

  // addFolder() //write method that adds folder

  render() {
    return (
      <div className="app">
        <header className="App">
          <h1>
            <Link to="/">Noteful</Link>
          </h1>{" "}
        </header>
        <main>
          <aside className="aside">
            <Route
              path="/"
              render={(rprops) => <Folder {...rprops} {...this.state} />}
            />
          </aside>

          <section>
            <Route
              exact
              path={["/", "/folder/:folderid"]}
              render={(rprops) => <Main {...rprops} {...this.state} />}
            />

            <Route
              path="/note/:noteId"
              render={(rprops) => <Note {...rprops} {...this.state} />}
            />
          </section>
        </main>{" "}
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
