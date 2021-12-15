import api from "./apiConfig";

export const getAllNotes = async () => {
  const resp = await api.get("/notes");
  return resp.data;
};
