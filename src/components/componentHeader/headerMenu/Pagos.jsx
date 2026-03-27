import { Link } from "react-router-dom";

const Pagos = () => {
  return (
    <div>
      <li className="nav-item  me-4">
        <Link
          className="nav-link text-white d-flex align-items-center"to="/home">
          <i className="bi bi-people me-1"></i>Pagos
        </Link>
      </li>
    </div>
  );
};
export default Pagos;