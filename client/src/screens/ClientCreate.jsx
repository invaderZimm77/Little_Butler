import { useState } from "react";

export default function ClientCreate({ handleClientCreate }) {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { name } = formData;

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
        handleClientCreate(formData);
      }}
    >
      <h3>Create Client</h3>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
