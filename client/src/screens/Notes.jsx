import React from "react";

export default function Notes({ notes }) {
  return (
    <div>
      <h3>Notes</h3>
      {notes.map((note) => (
        <p key={note.id}>{note.note}</p>
      ))}
    </div>
  );
}
