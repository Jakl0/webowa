import React from 'react';

const FormularzOgloszenia =({DodajOgloszenie}) => {
    return(
        <>
            <input type="text" className="form-control"/>
            <input type="text" className="form-control"/>
            <input type="text" className="form-control"/>
            <input type="text" className="form-control"/>
            
            <button onClick={()=>DodajOgloszenie()}>cwel</button>
        </>
    )
}
export default FormularzOgloszenia;