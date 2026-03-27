import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/componentHeader/Header';
import Body from './components/componentsBody/Body';

function App() {
  return (
    
   <Router>
    <div className="container-fluid px-0">
       
      <Header /> {/*siempre visible*/}
      <div className="text-white min-vh-100"
        style={{ backgroundColor: '#101610ff'}}>
        <Routes>             
          <Route path="/" element={<Body />} />                       
        </Routes>
        <div>
            
        {/* Debug temporal */}
        {/* <h1 style={{ color: 'white' }}>Hola, Vite + React funciona!</h1> */}
      </div>
        </div>
       
     </div>
    </Router>
  );
}
export default App;
