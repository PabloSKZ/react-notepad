import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import MarkdownInput from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";

const App = () => {
  const [note, setNote] = useState("");

  useEffect(() => {}, [note]);

  return (
    <div className="container">
      <h1 className="text-center">React Notepad</h1>
      <hr />
      <NoteDisplay note={note.note} title={note.title} />
      <hr />
      <MarkdownInput triggerSetNote={(input) => setNote(input)} note={note} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
