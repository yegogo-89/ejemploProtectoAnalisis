
import {Link} from 'react-router-dom';
import logo from '../../../assets/logos/logo.png';

function logoNombre() {
  return (
    <div className="d-flex align-items-center ">
      <Link className="navbar-brand d-flex justify-content ms-0" to="/">
        <img src={logo} alt="logoWed" width={80} className="rounded-circle img-fluid shadow-lg"/>
      </Link>

        {/*nombre*/}
      <div>        
        <Link className="navbar-brand text-info fw-bold" to="/">Technological Device</Link>
      </div>     
    </div>
  )
}
export default logoNombre;