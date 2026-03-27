import Form from 'react-bootstrap/Form';

const ModalInicioSesion = ({ closeModal, openRegister, openForgotPassword }) => {
  
  return (
    <>
      {/* Fondo oscuro */}
      <div
        className="modal-backdrop fade show"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}        
        onClick={closeModal}
      ></div>

      {/* Modal centrado */}
      <div className="modal fade show d-block" tabIndex="-3">
        <div className="modal-dialog d-flex justify-content-center">
          <div className="modal-content"
               style={{ backgroundColor: "#0c0d0cff" }}>

            {/* Header */}
            <div className="modal-header"
                 style={{ backgroundColor: "#142e0dff" }}>
                 <h5 className="modal-title text-white">Inicio de sesión</h5>
                 <button type="button"
                     className="btn-close small"
                     style={{ backgroundColor: "#eee7e4ff" }}
                     onClick={() => closeModal(false)}>
                </button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <Form className="mx-auto w-75 d-grid gap-3">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  required
                  placeholder="Correo"/>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  placeholder="Contraseña"/>
              </Form>
            </div>

            {/*olvido contraseña */}
            <div className="d-flex justify-content-center mb-2">
              <button
              className="btn btn-link btn-sm"
              onClick={openForgotPassword}>  {/*llama al padre*/}
              ¿olvido contraseña?
              </button>            
            </div>

            {/* Footer */}
            <div
              className="modal-footer"
              style={{ backgroundColor: "#142e0dff" }}>
              <div className="container py-0">
                <div className="row align-items-center">

                  {/* Columna izquierda */}
                  <div className="col d-flex flex-column justify-content-start">
                    <div className=" text-white small">
                      ¿No estás registrado?{" "}
                      </div>
                      <div className="w-100">
                      <button
                        className="btn btn-link btn-sm p-0 text-center"
                        onClick={openRegister}>
                        Registrarse
                      </button>                    
                      </div>
                  </div>

                  {/* Columna derecha */}
                  <div className="col d-flex justify-content-end gap-2">
                    <button
                      className="btn btn-dark btn-sm text-white"
                      onClick={() => closeModal(false)}>                      
                      Cancelar
                    </button>

                    {/*logica para iniciar sesion */}
                    <button
                      className="btn btn-outline-primary btn-sm"
                      style={{ backgroundColor: "#000000ff" }}>
                      <i className="bi bi-box-arrow-in-right me-2"></i> 
                      Iniciar 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; export default ModalInicioSesion;
