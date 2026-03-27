
import React, { useRef, useEffect, useState } from "react";

const CarouselCards = ({ products }) => {
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(3);
  const GAP = 16;

  useEffect(() => {
    if (!carouselRef.current) return;

    const updateLayout = () => {
      const container = carouselRef.current;

      //  puntos  exactos sin margen de error
      let visible = 3;
      if (window.innerWidth < 768) visible = 1;
      else if (window.innerWidth < 992) visible = 2;
      setCardsVisible(visible);

      
      const containerWidth = container.getBoundingClientRect().width;

      const totalGap = GAP * (visible - 1);
      const width = (containerWidth - totalGap) / visible;

      setCardWidth(width);
    };

    const ro = new ResizeObserver(() => updateLayout());
    ro.observe(carouselRef.current);

    updateLayout(); // primer cálculo

    window.addEventListener("resize", updateLayout);
    return () => {
      window.removeEventListener("resize", updateLayout);
      ro.disconnect();
    };
  }, []);

  const scrollByVisible = () => (cardWidth + GAP) * cardsVisible;

  const handleNext = () => {
    const container = carouselRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const next = container.scrollLeft + scrollByVisible();

    container.scrollTo({
      left: next > maxScroll ? maxScroll : next,
      behavior: "smooth"
    });
  };

  const handlePrev = () => {
    const container = carouselRef.current;
    if (!container) return;

    const prev = container.scrollLeft - scrollByVisible();

    container.scrollTo({
      left: prev < 0 ? 0 : prev,
      behavior: "smooth"
    });
  };

  return (
    <div className="carouselCardsProducts position-relative align-items-center py-3">
      <div
        ref={carouselRef}
        className="d-flex overflow-hidden "
        style={{
          gap: `${GAP}px`,
          scrollBehavior: "smooth",
          padding: "30px auto",          
          margin: "30px"
        }}
      >
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="card shadow-lg bg-dark"
              style={{
                flex: "10 0 auto",        
                width: `${cardWidth}px`,
                borderRadius: "20px",               
                height: "260px", // altura fija
                display: "flex",
                flexDirection: "row",      
                overflow: "hidden", // nada se sale del contenedor padre 
                border: "none" // quita bordes de las cards
              }}
            >
              <img
                src={product.img}
                className="card-img-top img-fluid shadow-lg p-2"
                alt={product.title}
                loading="lazy"
                style={{                  
                  width: "50%", //  ocupa todo el ancho disponible
                  objectFit: "contain", // mantiene proporción 
                  
                }} />
              <div className="card-body text-center text-bg-dark" 
              style={{ 
                padding: "20px", 
                fontSize: "1rem"}}>
                <h5>{product.nombre}</h5>
                <h6 className="text-muted">{product.categoria}</h6>
                <p className="small">{product.descripcion}</p>
                <p className="fw-bold">{product.valor}</p>
                <button className="btn text-white rounded-3"                 
                  style={{ 
                    backgroundColor: "#294129ff",                   
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
                  }}
                  onClick={handlePrev}                  
                >
                <i className="bi bi-bag-fill me-2"></i>                  
                  Comprar
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="btn btn-dark position-absolute top-50 start-2 translate-middle-y mx-2 shadow-lg"        
        onClick={handlePrev}
      >
        &lt; {/* signo de menor que*/}
      </button>
      <button
        className="btn btn-dark position-absolute top-50 end-0 translate-middle-y mx-2 shadow-lg"
        onClick={handleNext}
      >
        &gt; {/* signo de mayor que*/}
      </button>
    </div>
  );
};
export default CarouselCards;
