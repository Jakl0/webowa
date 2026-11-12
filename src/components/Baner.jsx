import react from 'react';

const Heading = ({Zalogowany , Wyloguj , Ogloszenie}) => {
    return(
        <div className="Baner">
        <h1>Pseudotomoto</h1>

        {Zalogowany && <div className="Navigation">
        Zalogowany: <b>patryk</b>

        <button className="btn btn-primary" onClick={()=> Ogloszenie()}>
          Dodaj ogłoszenie
        </button>

        <button className="btn btn-primary" onClick={() => Wyloguj()}>
          Wyloguj
        </button>
        </div>
        }
        
      </div>
    )
}
export default Heading;