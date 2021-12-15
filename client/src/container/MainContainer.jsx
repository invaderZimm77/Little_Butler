import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ClientCreate from "../screens/ClientCreate";
import ClientEdit from "../screens/ClientEdit";
import Clients from "../screens/Clients";
import ClientDetail from "../screens/ClientDetail";
import {
  getAllClients,
  postClient,
  putClient,
  deleteClient,
} from "../services/client";
import { getAllNotes } from "../services/note";
import Notes from "../screens/Notes";

export default function MainContainer({ currentEmployee }) {
  const [clients, setClients] = useState([]);
  const [notes, setNotes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchClients = async () => {
      const clientList = await getAllClients();
      setClients(clientList);
    };
    fetchClients();
  }, []);

  useEffect(() => {
    const fetchNotes = async () => {
      const noteList = await getAllNotes();
      setNotes(noteList);
    };
    fetchNotes();
  }, []);

  const handleClientCreate = async (formData) => {
    const newClient = await postClient(formData);
    setClients((prevState) => [...prevState, newClient]);
    history.push("/clients");
  };

  const handleClientUpdate = async (id, formData) => {
    const newClient = await putClient(id, formData);
    setClients((prevState) =>
      prevState.map((client) => {
        return client.id === Number(id) ? newClient : client;
      })
    );
    history.push("/clients");
  };

  const handleClientDelete = async (id) => {
    await deleteClient(id);
    setClients((prevState) => prevState.filter((client) => client.id !== id));
  };

  return (
    <div>
      <Switch>
        <Route path="/clients/:id/edit">
          <ClientEdit
            clients={clients}
            handleClientUpdate={handleClientUpdate}
            currentEmployee={currentEmployee}
          />
        </Route>
        <Route path="/clients/new">
          <ClientCreate
            handleClientCreate={handleClientCreate}
            currentEmployee={currentEmployee}
          />
        </Route>
        <Route path="/clients/:id">
          <ClientDetail notes={notes} currentEmployee={currentEmployee} />
        </Route>
        <Route path="/clients">
          <Clients
            clients={clients}
            handleClientDelete={handleClientDelete}
            currentEmployee={currentEmployee}
          />
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  );
}
