import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Layout from "./Layout";
import Login from "./screens/login";
import { loginEmployee } from "./services/auth";

function App() {
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const handleLogin = async (formData) => {
    const employeeData = await loginEmployee(formData);
    setCurrentEmployee(employeeData);
    console.log(employeeData);
  };
  return (
    <div className="Lil Butler">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
