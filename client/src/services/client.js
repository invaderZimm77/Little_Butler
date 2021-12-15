import api from "./apiConfig";

export const getAllClients = async () => {
  const resp = await api.get("/clients");
  return resp.data;
};

export const getOneClient = async (id) => {
  const resp = await api.get(`/clients/${id}`);
  return resp.data;
};

export const postClient = async (clientData) => {
  const resp = await api.post("/clients", { client: clientData });
  return resp.data;
};

export const putClient = async (id, clientData) => {
  const resp = await api.put(`/clients/${id}`, { client: clientData });
  return resp.data;
};

export const deleteClient = async (id) => {
  await api.delete(`/clients/${id}`);
};

export const addNote = async (idData) => {
  const resp ="note added" 
//   await api.post("/clients/notes", { client: idData });
  return resp;//.data;
};
