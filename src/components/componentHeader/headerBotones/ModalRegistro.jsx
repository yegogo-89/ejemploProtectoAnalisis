import { useState } from "react";
import Form from 'react-bootstrap/Form';


const ModalRegistro = ({ closeModal }) => {
  
  // estados para los input 
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [contacto, setContacto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("")
  const [confirmarPassword, setConfirmarPasword] = useState("")
  const [error, setError] = useState("") //mensaje de error

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que la pagina se recargue 

    // validaciones 
  if(!nombre.trim()){
    setError("el nombre es obligatorio");
    return;    
  }

  if(!apellido.trim()){
    setError("el apellido es obligatorio");
    return;    
  }

  if(!cedula.trim()){
    setError("la cedula es obligatoria");
    return;    
  }
  if(!/^\d+$/.test(cedula)){
    setError("la cedula solo debe contener números");
    return;    
  }
  if (cedula.length !==10) {
    setError("la cedula debe tener 10 digitos");
    return;
  }

  if(!contacto.trim()){
    setError("el numero de contacto es obligatorio");
    return;    
  }

  if(!email.trim() || !email.includes("@")){
    setError("el email es obligatorio y debe ser valido");
    return;    
  }

  if(!password.trim() || password.length < 7){
    setError("el password  es obligatorio y debe conteneer al menos 7 caracteres");
    return;    
  }

  if(!confirmarPassword.trim() || confirmarPassword.length < 7){
    setError("el password  es obligatorio y debe conteneer al menos 7 caracteres");
    return;    
  }
  setError("");
  console.log({nombre, apellido, cedula, contacto, email, password, confirmarPassword});
  alert ("formulario enviado correctamente");

  }
  return (
    <>
      {/* Fondo oscuro */}
      <div
        className="modealRegistro modal-backdrop"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onClick={() => closeModal(false)}
      ></div>
      {/* Modal centrado */}
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog d-flex justify-content-center">
          <div
            className="modal-content"
            style={{ backgroundColor: "#111811ff" }}
          >
            {/* Header nombre del formulario y "X" cierre del modal*/}
            <div
              className="modal-header"
              style={{ backgroundColor: "#142e0dff" }}
            >
              <h5 className="modal-title text-white">Formulario de registro</h5>

              {/*boton de cirre "X"*/}
              <button
                type="button"
                className="btn-close small"
                style={{ backgroundColor: "#f0e4e5ff" }}
                onClick={() => closeModal(true)}
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <Form onSubmit={handleSubmit}
                className="mx-auto w-73 small ms-5">

                <input
                  type="text"
                  className="form-control-sm mb-2"                  
                  required                
                  value={nombre}
                  placeholder = "Nombre"
                  onChange={(e) => setNombre(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Apellido"
                  className="form-control-sm mb-2"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}/>

                <input
                  type="text"
                  placeholder="Cedula"
                  className="form-control-sm mb-2"
                  value={cedula}
                  onChange={(e) => setCedula(e.target.value)}                  
                />

                <input
                  type="text"
                  placeholder="Contacto"
                  className="form-control-sm mb-2"
                  value={contacto}
                  onChange={(e) => setContacto(e.target.value)}
                
                />
                <input
                  type="email"
                  placeholder="Email" required
                  className="form-control-sm mb-2"
                  value={email}
                  onChange={(e) =>setEmail(e.target.value)}
                  
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="form-control-sm mb-2"
                  value={password}
                  onChange={(e) => setPasword(e.target.value)}                  
                />

                <input
                  type="password"
                  placeholder="Confirmar Contraseña"
                  className="form-control-sm mb-2"
                  value={confirmarPassword}
                  onChange={(e) => setConfirmarPasword(e.target.value)}/>

                {error && <p className="text-danger">{error}</p>}                
              </Form>
            </div>

            {/* Footer */}
            <div
              className="modal-footer"
              style={{ backgroundColor: "#142e0dff" }}>

              <button              
                className="btn btn-dark btn-sm text-white"
                onClick={() => closeModal(false)}>
                Cancelar
              </button>

              {/* logica para enviar los datos del formulario a la BD */}
              <button
                type="submit"
                className="btn btn-outline-primary btn-sm"
                style={{ backgroundColor: "#000000ff" }}
                onClick={handleSubmit}>
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};
export default ModalRegistro;
