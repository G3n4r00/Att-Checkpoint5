import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <>
      <header>
        <br />
        <nav>
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/produtos">Produtos</Link> </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
