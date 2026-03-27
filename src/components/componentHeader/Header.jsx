import React, {lazy, Suspense } from "react"; 
import ContolModalRegistroSesion from "./headerBotones/ContolModalRegistroSesion";


const LogoNombre = lazy(() => import("./logoNombre/LogoNombre"));
const Inicio = lazy(() => import("./headerMenu/Inicio"));
const Compra = lazy(() => import("./headerMenu/Compra"));
const Pagos = lazy(() => import("./headerMenu/Pagos"));
const Envios = lazy(() => import("./headerMenu/Envios"));
const Busqueda = lazy(() => import("./headerBotones/Busqueda"));

const Header = () => {
  return (
    <header className="text-white" style={{ backgroundColor: "#516d51ff" }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          
          {/*Logo-nombrer*/}        
          <LogoNombre />
            {/*menú móviles*/}
          <button
            className="navbar-toggler flex-column"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú de navegación */}
          <div
            className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav flex-lg-row flex-column fs-5 ">
              
                  <Inicio />   
                  <Compra />
                  <Pagos />
                  <Envios />
                                   
            </ul>

            <div className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center gap-3 mb-2">                
                <ContolModalRegistroSesion />
              </div>
              <div className="w-100 d-flex justify-content-center">
                <Busqueda />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
