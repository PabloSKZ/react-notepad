import React, { useState, useEffect } from "react";
import Showdown from "showdown";

const NoteDisplay = ({ note, title }) => {
  const converter = new Showdown.Converter();

  function createMarkup(note) {
    return { __html: converter.makeHtml(note) };
  }

  return (
    <div className="row" style={{ minHeight: "30vh" }}>
      <div className="col-3"></div>
      <div className="col-8">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={createMarkup(note)} />
      </div>
    </div>
  );
};

export default NoteDisplay;
