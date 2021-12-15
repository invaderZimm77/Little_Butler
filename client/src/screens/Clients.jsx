import React from "react";
import { Link } from "react-router-dom";

export default function Clients({
  clients,
  handleClientDelete,
  currentEmployee,
}) {
  console.log(currentEmployee);
  return (
    <div className="clients-list">
      <h3>Clients</h3>
      {clients.map((client) => (
        <div className="client-mini-button" key={client.id}>
          <Link to={`/clients/${client.id}`}>
            <p>{client.name}</p>
          </Link>
          {currentEmployee && (
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
    </div>
  );
}
