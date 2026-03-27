import React from "react";
import { Link } from "react-router-dom";

const Inicio = React.memo(() => {
  return (    
      <li className="nav-item  me-lg-3 mb-2 mb-lg-0">
        <Link to="/homer"
              className="nav-link text-white d-flex align-items-center">
             <i className='bi bi-house-door me-1'></i>Inicio
        </Link> {/*icono e inicio*/}
      </li>
  );
});
export default Inicio;