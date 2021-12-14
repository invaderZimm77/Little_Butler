import { Link } from 'react-router-dom'


export default function Layout(props) {
	return (
    <div>
      <header>
        <h1>Lil Butler</h1>
        <Link>Login</Link>
      </header>
      {props.children}
    </div>
  );
}
