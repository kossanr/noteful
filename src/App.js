import React from "react";
import data from "./data";
import Main from "./Main";
import Folder from "./Folder";
import Note from "./Note";
import Context from "./Context";
import { Route, Link } from "react-router-dom";
import "./App.css";

export default class App extends React.Component {
  state = {
    ...data,
    addFolder: (folder) =>
      this.setState({ folders: [...this.state.folders, folder] }),
    addNote: (note) => this.setState({ notes: [...this.state.notes, note] }),
  };

  // componentDidMount()

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="app">
          <header className="App">
            <h1>
              <Link to="/">Noteful</Link>
            </h1>{" "}
          </header>
          <main>
            <aside className="aside">
              <Route path="/" component={Folder} />
            </aside>

            <section>
              <Route exact path={["/", "/folder/:folderid"]} component={Main} />
              <Route path="/note/:noteId" component={Note} />
            </section>
          </main>{" "}
        </div>
      </Context.Provider>
    );
  }
}
