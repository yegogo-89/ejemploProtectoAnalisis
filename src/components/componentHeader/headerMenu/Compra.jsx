import { Link } from "react-router-dom";

const Compra = () => {
  return (
    <div>
      <li className="nav-item me-4">
        <Link
          className="nav-link text-white d-flex align-items-center"to="/home">
          <i className="bi bi-box-seam me-1"></i>Compras
        </Link>
      </li>
    </div>
  );
}
export default Compra;
