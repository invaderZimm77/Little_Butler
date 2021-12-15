import React from "react";
import { Link } from "react-router-dom";

export default function Clients({ clients, handleClientDelete, currentUser }) {
  return (
    <div>
      <h3>Clients</h3>
      {clients.map((client) => (
        <div key={client.id}>
          <Link to={`/clients/${client.id}`}>
            <p>{client.name}</p>
          </Link>
          {currentUser?.id === client.user_id && (
            <>
              <Link to={`/clients/${client.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleClientDelete(client.id)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
      <Link to="/clients/new">
        <button>Create</button>
      </Link>
    </div>
  );
}
