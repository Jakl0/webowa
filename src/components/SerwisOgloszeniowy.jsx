import react from 'react'

const SerwisOgloszeniowy = ({lista}) => {
    return(
        <>
            {
                lista.map((ogloszenie) => (
                    <div className="Ogloszenie">
                        
                            <img src={ogloszenie.url} width={100}/>
                            <div className="Atributes">
                                <h2>{ogloszenie.nazwa} {ogloszenie.rok}</h2>
                                <p>{ogloszenie.opis}</p>

                                <div className="bottomPart">
                                    <h5 style={{color:"#3280e6"}} >{ogloszenie.cena} zł</h5>
                                    Wystawił: {ogloszenie.nadawca}
                                </div>
                            
                        </div>
                    </div>
                ))
            }
            
        </>
    )
}
export default SerwisOgloszeniowy;