import React, {useState, useEffect} from 'react';


function Slider() {
  
  const imags = [
    require('../../assets/imagenes-slider/pant1.jpg'),
    require('../../assets/imagenes-slider/pant2.jpg'),
    require('../../assets/imagenes-slider/pant3.jpg')
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % imags.length);
    }, 3000); // cambia cada 3000 ms = 3s

    //  (limpia el intervalo)
    return () => clearInterval(interval);
  }, [imags.length]);

  // (JSX que renderiza la imagen actual y controles simples)
  return (
    <div className="slider-component">
      <img
        id="slider-img"
        src={imags[index]}
        alt={`Slide ${index + 1}`}
        className="img-fluid rounded shadow "
      />

      <div className="d-flex justify-content-center mt-2">
        {imags.map((_, i) => (
          <button
            key={i}
            className={`btn btn-sm mx-1 ${i === index ? 'btn-secondary' : 'btn-outline-secondary'}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
export default Slider;