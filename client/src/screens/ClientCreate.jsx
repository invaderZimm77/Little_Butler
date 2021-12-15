import { useState } from "react";

export default function ClientCreate({ handleClientCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "301-555-0000",
    img_url: "",
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
      <lable>
        Address:
        <input
          type="text"
          name="address"
          value={name}
          onChange={handleChange}
        />
      </lable>

      <lable>
        Phone:
        <input type="text" name="phone" value={name} onChange={handleChange} />
      </lable>
      <lable>
        img URL:
        <input type="text" name="imgURL" value={name} onChange={handleChange} />
      </lable>
	  
      <button>Submit</button>
    </form>
  );
}
