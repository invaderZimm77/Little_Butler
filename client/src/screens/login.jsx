import { useState } from "react";

export default function Login(props) {
  const [formData, setFormData] = useState({
    employee_id: "",
    password: "",
  });
  const { employee_id, password } = formData;
  const { handleLogin } = props;

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
        handleLogin(formData);
      }}
    >
      <h3>Login</h3>
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
