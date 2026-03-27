import { useState } from "react";
import ModalRegistro from "./ModalRegistro";
import ModalInicioSesion from "./ModalInicioSesion";
import ForgotPasswordModal from "./ModalForgotPassword";
import { Button } from "react-bootstrap";


const ContolModalRegistroSesion = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);

  const openForgotPassword = () => {
    setShowLogin(false); //cerra e login 
    setShowForgotModal(true); // abre el passwordForgot
  };

  return (
    <div className="container mt-n5">
      
      {/* Botón para inicia sesion */}
      <Button
        className="btn btn-outline-primary m-2"
        onClick={() => setShowLogin(true)}
        style={{ backgroundColor: "#080f01ff" }}>
        Iniciar sesión
      </Button>

      {/* Botón para regitrarse */}
      <Button
        className="btn btn-link custom-hover"
        style={{ backgroundColor: "#080f01ff" }}
        onClick={() => setShowRegister(true)}>
        Registrarse
      </Button>

      {/* Modal de inicio de sesión */}
      {showLogin && (
        <ModalInicioSesion
          closeModal={() => setShowLogin(false)}
          openRegister={() => {
            setShowRegister(true); // abre registro
            setShowLogin(false); // cierra login
          }}
          openForgotPassword = {openForgotPassword}
        />
      )}
       {/* Modal de recuperar contraseña */}
      {showForgotModal && (
        <ForgotPasswordModal
          show={showForgotModal}
          onClose={() => setShowForgotModal(false)}
        />
      )}

      {/* Modal de registro */}
      {showRegister && (<ModalRegistro closeModal={() => 
                        {setShowRegister(false);}}/>
      )}
    </div>
  );

  //   const [openModal, setOpenModal] = useState(false);

  //   return (
  //       <div>
  //         <button className='btn btn-outline-primary btn-sm'
  //             onClick={() =>{
  //             setOpenModal(true)}}
  //             style={{ backgroundColor: '#080f01ff'}}>
  //             <i className="bi bi-box-arrow-in-right me-2"></i>Registrarse</button>
  //         {openModal &&   <ModalRegistro closeModal={setOpenModal} /> }
  //       </div>
  // );
};
export default ContolModalRegistroSesion;
