import { Link } from "react-router-dom";

const Envios = () => {
  return (
    <div>
      <li className="nav-item  me-4">
        <Link
          className="nav-link text-white d-flex align-items-center"to="/home">
          <i className="bi bi-receipt me-1"></i>Envios
        </Link>
      </li>
    </div>
  );
};
export default Envios;
