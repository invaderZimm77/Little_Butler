import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ClientEdit({ clients, handleClientUpdate }) {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { name } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const clientItem = clients.find((client) => client.id === Number(id));
      setFormData({ name: clientItem.name });
    };
    if (clients.length) prefillFormData();
  }, [clients, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleClientUpdate(id, formData);
      }}
    >
      <h3>Edit Client</h3>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
