import { useState } from "react";
import Form from 'react-bootstrap/Form';


const ForgotPasswordModal = ({ show, onClose }) => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message || "Correo enviado");
    } catch (error) {
      setMessage("Error al enviar el correo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Modal forgot password */}
       <div className="modal-backdrop fade show"></div>

      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog d-flex justify-content-center">
          <div className="modal-content"
          style={{ backgroundColor: "#0c0d0cff" }}>

            <div className="modal-header" style={{ backgroundColor: "#142e0dff" }}>
              <h5 className="modal-title text-white">Recuperar contraseña</h5>
              <button className="btn-close" 
              style={{ backgroundColor: "#eee7e4ff" }}
              onClick={onClose}></button>
            </div>

            <Form onSubmit={handleSubmit}>
              <div className="modal-body">
                <p className="text-white">Ingresa tu correo electrónico</p>

                <input
                  type="email"
                  className="form-control"
                  required
                  value={email}
                  placeholder="Correo Electrónico"
                  onChange={(e) => setEmail(e.target.value)}
                />

                {message && (
                  <div className="alert alert-info mt-3">
                    {message}
                  </div>
                )}
              </div>

              <div className="modal-footer"
              style={{ backgroundColor: "#142e0dff" }}>
                <button
                  type="button"
                  className="btn btn-dark btn-sm text-white"
                  onClick={onClose}>
                  Cancelar
                </button>

                {/*logica para enviar recuperacion de password a un correo*/}
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-sm"
                   style={{ backgroundColor: "#000000ff" }}
                  disabled={loading}>
                  <i class="bi bi-send"></i>
                  {loading ? "Enviando..." : "Enviar correo"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>          
    </>
  );
}
export default ForgotPasswordModal;