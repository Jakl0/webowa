import react from 'react';

const Heading = ({Zalogowany , Zaloguj , Wyloguj}) => {
    return(
        <div className="Baner">
        <h1>Pseudotomoto</h1>

        {Zalogowany ? <div className="Navigation">
        Zalogowany: <b>patryk</b>

        <button className="btn btn-primary">
          Dodaj ogłoszenie
        </button>

        <button className="btn btn-primary" onClick={() => Wyloguj()}>
          Wyloguj
        </button>
        </div> : 
        
        <button className="btn btn-primary" onClick={()=>Zaloguj()}>
          Zaloguj
          </button>
        }
        
      </div>
    )
}
export default Heading;