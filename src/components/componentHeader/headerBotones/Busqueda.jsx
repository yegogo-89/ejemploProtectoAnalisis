
import { Container, InputGroup, Form, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"; // Importa el ícono de lupa


  function Busqueda(){
  return (    
    <Container className="d-flex justify-content-center">
      <InputGroup className=" w-auto" style={{ maxWidth: "180px "}} size="sm ">
      <Form.Control
      type="text" 
      placeholder="Buscar..." 
      aria-label="Buscar"
      />
      <Button variant="dark btn-outline-primary">
       <Search/>
      </Button>
      </InputGroup>
    </Container>
  )
}
export default Busqueda;