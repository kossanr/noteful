import React from "react";
import Main from "../Main/Main";
import Folder from "../Folder/Folder";
import Note from "../Note/Note";
import Context from "../Context";
import { Route, Link } from "react-router-dom";
import "./App.css";
import config from "../config";
import AddFolder from "../AddFolder/AddFolder";
import AddNote from "../AddNote/AddNote";
import NotefulError from "../NotefulError/NotefulError";

export default class App extends React.Component {
  state = {
    // ...data,
    notes: [],
    folders: [],
    handleDeleteNote: (noteId) => {
      this.setState({
        notes: this.state.notes.filter((note) => note.id !== noteId),
      });
    },
    addFolder: (folder) =>
      this.setState({ folders: [...this.state.folders, folder] }),

    addNote: (note) => this.setState({ notes: [...this.state.notes, note] }),
  };

  componentDidMount() {
    //Promise.all() runs several asynchronous operations in parallel
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`),
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then((e) => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then((e) => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <NotefulError>
          <div className="app">
            <header className="App">
              <h1 className="noteful_header">
                <Link to="/">Noteful</Link>
              </h1>{" "}
            </header>
            <main>
              <aside className="aside">
                <Route path="/" component={Folder} />
              </aside>

              <section>
                <Route
                  exact
                  path={["/", "/folder/:folderid"]}
                  component={Main}
                />
                <Route path="/note/:noteId" component={Note} />
                <Route path="/addfolder" component={AddFolder} />
                <Route path="/addNote" component={AddNote} />
              </section>
            </main>{" "}
          </div>
        </NotefulError>
      </Context.Provider>
    );
  }
}
