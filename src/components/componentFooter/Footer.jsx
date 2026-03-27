import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap"; // <-- IMPORTANTE


const  Footer = () => {
  return (    
      <Container className="text-light py-4 mt-2">
        <Row>
          {/* Sección de contacto */}
          <Col md={4} className="mb-4 text-center text-md-center">
            <h5>Contacto</h5>
            <p className="mb-1">Dirección: Calle # 12-123, Ibague, Colombia</p>
            <p className="mb-1">Tel: +1 234 567 890</p>
            <p>Email: technologicalDevice@empresa.com</p>
          </Col>

          {/* Sección de enlaces*/}
          <Col md={4} className="mb-4 text-center">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">Sobre Nosotros</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-light text-decoration-none">Servicios</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-light text-decoration-none">Política de Privacidad</Link>
              </li>
            </ul>
          </Col>

          {/* Sección de enlaces externos / redes sociales */}
          <Col md={4} className="mb-4 text-center text-md-center">
            <h5>Síguenos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="bg-light" />

        {/* Parrafo centrado al final */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2025 Technological Device. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
  );
}
export default Footer;