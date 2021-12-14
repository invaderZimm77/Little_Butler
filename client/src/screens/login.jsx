import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    employee_id: "",
    password: "",
  });
  const { employee_id, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form>
      <label>
        Employee ID:
        <input
          type="text"
          name="employee_id"
          value={employee_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
