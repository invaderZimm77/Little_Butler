import React from "react";

//a function called Notes that takes an object of notes of the type notes
//which is comprised of objects made of an id type number & note type string that is an array

export default function Notes({notes,}: {notes?: { id: number; note: string }[];}) {
 
  return (
    <div>
      <h3>Notes</h3>
      {notes?.map((note) => (
        <p key={note.id}>{note.note}</p>
      ))}
    </div>
  );
}
