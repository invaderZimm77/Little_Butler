import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Login from "./screens/Login";

function App() {
  return (
    <div className="Lil Butler">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
