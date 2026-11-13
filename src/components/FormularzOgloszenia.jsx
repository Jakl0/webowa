import {useState} from 'react';

const FormularzOgloszenia =({DodajOgloszenie}) => {
    
    const [noweOgloszenie,setOgloszenie] = useState({
        nazwa:"",
        rok:0,
        opis:"",
        cena:0,
        nadawca:"patryk",
        url:""
    });
    
    return(
        <>
            <input type="text" placeholder='Nazwa' onChange={()=> setOgloszenie((prev) => ({...prev , nazwa:event.target.value}))} className="form-control"/>
            <input type="number" placeholder='rok produkcji' onChange={()=> setOgloszenie((prev) => ({...prev , rok:event.target.value}))} className="form-control"/>
            <input type="number" placeholder='cena' onChange={()=> setOgloszenie((prev) => ({...prev , cena:event.target.value}))} className="form-control"/>
            <input type="text" placeholder='adres url zdjęcia' onChange={()=> setOgloszenie((prev) => ({...prev , url:event.target.value}))} className="form-control"/>
            
           
            <button className='btn btn-primary' onClick={()=>DodajOgloszenie(noweOgloszenie)}>Dodaj</button>
        </>
    )
}
export default FormularzOgloszenia;