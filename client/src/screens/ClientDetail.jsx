import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneClient, addNote } from "../services/client";

export default function ClientDetail({ notes, currentEmployee }) {
  const [client, setClient] = useState(null);
  const [noteId, setNoteId] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchClient = async () => {
      const clientItem = await getOneClient(id);
      setClient(clientItem);
    };
    fetchClient();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setNoteId(value);
  };
  // Our handle submit for adding the note to our client
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNotes = await addNote({ note_id: noteId, client_id: id });
    setClient((prevState) => ({ ...prevState, notes: newNotes }));
  };

  return (
    <div>
      <h3>{client?.name}</h3>
      {/* {client?.notes.map((note) => (
        <p key={`list${note.id}`}>{note.name}</p>
      ))} */}

      {currentEmployee?.id === client?.employee_id && (
        <form onSubmit={handleSubmit}>
          {/* below is our for for the note drop down */}
          <select onChange={handleChange} defaultValue="default">
            {/* we can set a default value to tell people to select a note*/}
            {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
            {/* we also add the "disabled" in the <option> to prevent employees from selecting it*/}
            <option disabled value="default">
              -- Select a Note --
            </option>
            {/* now we loop over all notes and return an <option> tag for each */}

            {notes.map((note) => (
              // we track the note's id as the "value" which will get added to state onChange
              // the note's name goes between the open and close tag which is what the employee sees
              <option value={note.id} key={`select${note.id}`}>
                {note.name}
              </option>
            ))}
          </select>
          <button>Add</button>
        </form>
      )}
    </div>
  );
}
