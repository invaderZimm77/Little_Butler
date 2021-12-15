import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ClientEdit({ clients, handleClientUpdate, currentEmployee}) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    img_url: "",
    employee_id: currentEmployee.id,
  });
  const { name, address, phone, img_url } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const clientItem = clients.find((client) => client.id === Number(id));
      setFormData({ name: clientItem.name, address: clientItem.address, phone: clientItem.phone, img_url: clientItem.img_url });
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
