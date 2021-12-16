import { Link } from "react-router-dom";
import  Footer  from "./components/Footer.jsx";
import Header from "./components/Header"

export default function Layout({ currentEmployee, handleLogout, children }) {
  return (
    <div>
      <Header/>
        {currentEmployee ? (
          <div className="cur-employee">
            <p>Hello {currentEmployee.employee_id}.</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'>Login</Link>
        )}
        {currentEmployee && (
          <div className="nav-box">
            <Link to='/clients'>Clients</Link>
            <br />
            <Link to="/clients/new">New Client</Link>
          </div>
        )}

      {children}
      <Footer/>
    </div>
  );
}