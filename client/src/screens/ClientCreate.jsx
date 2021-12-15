import { useState } from "react";

export default function ClientCreate({ handleClientCreate, currentEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    img_url: "",
    employee_id: currentEmployee.id,
  });
  const { name, address, phone, img_url } = formData;

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
          value={address}
          onChange={handleChange}
        />
      </lable>

      <lable>
        Phone:
        <input type="text" name="phone" value={phone} onChange={handleChange} />
      </lable>
      <lable>
        img URL:
        <input
          type="text"
          name="img_url"
          value={img_url}
          onChange={handleChange}
        />
      </lable>

      <button>Submit</button>
    </form>
  );
}
