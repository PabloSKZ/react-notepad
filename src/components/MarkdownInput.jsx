import React, { useState, useEffect } from "react";
import NotesList from "./NotesList";

const MarkdownInput = ({ triggerSetNote, note }) => {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e) => {
    /* triggerSetNote(input); */
    localStorage.setItem(input.title, JSON.stringify(input.note));
  };

  useEffect(() => {
    triggerSetNote(input);
  }, [input]);

  return (
    <div className="row">
      <NotesList triggerShowStorage={(input) => setInput(input)} />
      <div className="col-8">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              className="form-control"
              value={note.title}
            />
          </div>
          <div className="form-group">
            <label>Note:</label>
            <textarea
              name="note"
              onChange={handleChange}
              className="form-control"
              value={note.note}
              style={{ minHeight: "30vh" }}
            />
          </div>
          <input
            type="submit"
            value="Sauvegarder"
            className="btn btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default MarkdownInput;
