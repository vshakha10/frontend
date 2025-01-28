const Card = ({children}) => {
    return (
      <>
        <div className="card">
          <h1>This is Card Components</h1>
          {children}
        </div>
      </>
    );
  };
  
  export const Button = () => {
    return (
      <div className="card_btn">
        <button>Click</button>
        <button>Read More</button>
      </div>
    );
  };
  
  export const Images = () => {
    return (
      <div className="card_img">
        <img
          src="https://media.istockphoto.com/id/2161336519/photo/orange-mosaic-background-in-technology-concept-abstract-orange-led-squares-technology-digital.jpg?s=2048x2048&w=is&k=20&c=WASfEoXM52uipJFTSI1FzyCCdOTdweo33gbfWaEoQzk="
          alt=""
        />
      </div>
    );
  };
  
  export default Card;