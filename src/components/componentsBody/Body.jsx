
import Slider from './Slider.jsx';
import ImgTextoBody from './ImgTextoBody.jsx';
import Footer from '.././componentFooter/Footer.jsx'
import CarouselCards from './CarouselCards.jsx';
import cp1 from '../../assets/images/computadoras/cp1.jpg';
import cp2 from '../../assets/images/computadoras/cp2.jpg';
import cp3 from '../../assets/images/computadoras/cp3.jpg';
import cp4 from '../../assets/images/computadoras/cp4.jpg';
import cp5 from '../../assets/images/computadoras/cp5.jpg';
import cp6 from '../../assets/images/computadoras/cp6.jpg';
import cp7 from '../../assets/images/computadoras/cp7.jpg';
import cp8 from '../../assets/images/computadoras/cp8.jpg';
import cp9 from '../../assets/images/computadoras/cp9.jpg';
import cp10 from '../../assets/images/computadoras/cp10.jpg';

const Body = () => {


const productsSection1 = [
  { id: 1, 
    img: cp1, 
    nombre: "Lapton Asus",  
    categoria : "Lapton - portatil ",
    descripcion: "Inter Cores i5 - DDH 512 - Ram 16GB - NVIDIA RTX 1200",
    valor :  "3.300.345"
   },
  { id: 2, img: cp2, 
    nombre: "Lapton Lenovo",  
    categoria : "Lapton - portatil ",
    descripcion: "Inter Cores i7 - DDH 512 - Ram 16GB - NVIDIA RTX 1200",
    valor :  '2.300.345' },
  { id: 3, img: cp3, 
    nombre: "Lapton Toshiba",  
    categoria : "Lapton - portatil ",
    descripcion: "Inter Cores i9 - DDH 512 - Ram 16GB - NVIDIA RT 1200",
    valor :  '4.300.345'},
    { id: 4, img: cp6, nombre: "Producto 6",  categoria: "Desc 6" },
    { id: 5, img: cp4, nombre: "Producto 4",  categoria: "Desc 4" },
    { id: 6, img: cp5, nombre: "Producto 5",  categoria: "Desc 5" },
    { id: 7, img: cp6, nombre: "Producto 6",  categoria: "Desc 6" },
    { id: 8, img: cp6, nombre: "Producto 6",  categoria: "Desc 6" },
    { id: 9, img: cp10, nombre: "Producto 6",  categoria: "Desc 10" },
    { id: 10, img: cp4, nombre: "Producto 4",  categoria: "Desc 4" },  
];

const productsSection2 = [
  { id: 1, img: cp4, nombre: "Producto 4",  categoria: "Desc 4" },
  { id: 2, img: cp5, nombre: "Producto 5",  categoria: "Desc 5" },
  { id: 3, img: cp6, nombre: "Producto 6",  categoria: "Desc 6" },
  { id: 4, img: cp6, nombre: "Producto 6",  categoria: "Desc 6" },
  { id: 5, img: cp4, nombre: "Producto 4",  categoria: "Desc 4" },
  { id: 6, img: cp5, nombre: "Producto 5",  categoria: "Desc 5" },
  { id: 7, img: cp6, nombre: "Producto 6",  categoria: "Desc 6" },
  { id: 8, img: cp6, nombre: "Producto 6",  categoria: "Desc 6" },
  { id: 9, img: cp10, nombre: "Producto 6",  categoria: "Desc 10" },
  { id: 10, img: cp10, nombre: "Producto 6",  categoria: "Desc 10" },
];

const productsSection3 = [
  { id: 1, img: cp7, nombre: "Producto 4",  categoria: "Desc 4" },
  { id: 2, img: cp8, nombre: "Producto 5",  categoria: "Desc 5" },
  { id: 3, img: cp9, nombre: "Producto 6",  categoria: "Desc 6" },
  { id: 4, img: cp10, nombre: "Producto 6",  categoria: "Desc 10" },
  { id: 5, img: cp10, nombre: "Producto 6",  categoria: "Desc 10" },
  { id: 6, img: cp4, nombre: "Producto 4",  categoria: "Desc 4" },
  { id: 7, img: cp5, nombre: "Producto 5",  categoria: "Desc 5" },
  { id: 8, img: cp6, nombre: "Producto 6",  categoria: "Desc 6" },
  { id: 9, img: cp6, nombre: "Producto 6",  categoria: "Desc 6" },
  { id: 10, img: cp10, nombre: "Producto 6",  categoria: "Desc 10" },
]; 
const productsSection4 = [
  { id: 1, img: cp7, nombre: "Producto 4",  categoria: "Desc 4" },
  { id: 2, img: cp8, nombre: "Producto 5",  categoria: "Desc 5" },
  { id: 3, img: cp9, nombre: "Producto 6",  categoria: "Desc 6" },
  { id: 4, img: cp10, nombre: "Producto 6",  categoria: "Desc 10" },
  { id: 5, img: cp10, nombre: "Producto 6",  categoria: "Desc 10" },
  { id: 6, img: cp4, nombre: "Producto 4",  categoria: "Desc 4" },
  { id: 7, img: cp5, nombre: "Producto 5",  categoria: "Desc 5" },
  { id: 8, img: cp6, nombre: "Producto 6",  categoria: "Desc 6" },
  { id: 9, img: cp6, nombre: "Producto 6",  categoria: "Desc 6" },
  { id: 10, img: cp10, nombre: "Producto 6",  categoria: "Desc 10" },
]; 


  return (
    <>
      <section className="img_texto_seccion1 container py-5" >
       <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center">
              <Slider/>
          </div>
              {/*columna de texto*/ }
          <div className="col-12 col-md-6 text-center mt-4">
            <ImgTextoBody/>           
          </div>
        </div>        
      </section>         
  
    <div className='sectionCarousel align-items-center' style={{ backgroundColor: '#516d51ff'}}>
      <div className='carouselSectionUno' >
      <CarouselCards products={productsSection1}/>
      </div>      
      <div className='carouselSectionDos'>
      <CarouselCards products={productsSection2} />
      </div>
      <div className='carouselSectionTres' style={{ backgroundColor: '#516d51ff'}}>
        <CarouselCards products={productsSection3} />
      </div>
       <div className='carouselSection4' style={{ backgroundColor: '#516d51ff'}}>
        <CarouselCards products={productsSection4} />
      </div>
    </div> 

    <div>
        <Footer />
    </div>

    </>
  )
}
export default Body;