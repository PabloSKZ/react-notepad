import React, { useState, useEffect } from "react";

const NotesList = ({ triggerShowStorage }) => {
  const [note, setNote] = useState({});
  let notes = [];
  for (let i = 0; i < localStorage.length; i++) {
    notes.push(localStorage.key(i));
  }

  useEffect(() => {
    triggerShowStorage(note);
  }, [note]);

  const getStorageItem = (n) => {
    setNote({ title: n, note: JSON.parse(localStorage.getItem(n)) });
  };

  const notesListRender = notes.map((n, id) => (
    <li key={id} className="list-group-item">
      <a href="#" onClick={() => getStorageItem(n)}>
        {n} - {JSON.parse(localStorage.getItem(n)).slice(0, 15)}
      </a>
    </li>
  ));

  return (
    <div className="col-3">
      <ul className="list-group mt-5">{notesListRender}</ul>
    </div>
  );
};

export default NotesList;
