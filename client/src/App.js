import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Login from "./screens/login";
import { loginEmployee, verifyEmployee, removeToken } from "./services/auth";
import MainContainer from "./container/MainContainer";

function App() {
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const employeeData = await verifyEmployee();
      setCurrentEmployee(employeeData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const employeeData = await loginEmployee(formData);
    setCurrentEmployee(employeeData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentEmployee(null);
    localStorage.removeItem("authToken");
    removeToken();
  };
  return (
    <div className="App">
      <Layout currentEmployee={currentEmployee} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/">
            <MainContainer currentEmployee={currentEmployee} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
