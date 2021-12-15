import { Link } from "react-router-dom";

export default function Layout({ currentEmployee, handleLogout, children }) {
  return (
    <div>
      <header>
        <h1>Lil Butler</h1>
        {currentEmployee ? (
          <div>
            <p>{currentEmployee.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
        {currentEmployee && (
          <nav>
            <Link to='/clients'>Clients</Link>
            <br />
            <Link to="/clients/new">New Client</Link>
          </nav>
        )}
      </header>
      {children}
    </div>
  );
}