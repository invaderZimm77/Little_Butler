import React, { ChangeEvent } from "react";
import { useState } from "react";

interface myData {
  name: string;
  address: string;
  phone: string;
  img_url: string;
  employee_id: string;
  notes?: { id: number; note: string }[];
}

export default function ClientCreate({
  handleClientCreate,
  currentEmployee,
}: {
  handleClientCreate: (formData: myData) => void;
  currentEmployee: any;
}) {
  const [formData, setFormData] = useState<myData>({
    name: "",
    address: "",
    phone: "",
    img_url: "",
    notes:[],
    employee_id: currentEmployee.id,
  });
  const { name, address, phone, img_url } = formData;

  const handleChange = (e: any) => {
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
      className="client-create"
    >
      <h3>Create Client</h3>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone:
        <input type="text" name="phone" value={phone} onChange={handleChange} />
      </label>
      <label>
        img URL:
        <input
          type="text"
          name="img_url"
          value={img_url}
          onChange={handleChange}
        />
      </label>

      <button>Submit</button>
    </form>
  );
}
