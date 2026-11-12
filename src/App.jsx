import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm.jsx'
import SerwisOgloszeniowy from './components/SerwisOgloszeniowy.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import Heading from './components/Baner.jsx'
import FormularzOgloszenia from './components/FormularzOgloszenia.jsx'

function App() {
  const [stanAplikacji,setStan] = useState("poczatek");
  const [Zalogowany , setLogowanie] = useState(false);

  const [tablicaOgloszen , setTablica] = useState([
    {
      nazwa:"Toyota Corolla" , 
      rok: 2016 , 
      opis:"Benzyna, 120k km, regularne serwisy. Cena 38000 zł" , 
      cena: 38000 , 
      nadawca: "Dealer_A",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mZDj_4nN7KdQRl4w-USunnMgoT7jqRjt1rxZYKjWpQ&s=10"
    },
      {
        nazwa: "BMW 320i" , 
        rok:2014, 
        opis: "Auto garażowane, 200k km, klima, alufelgi. Cena 42000 zł", 
        cena: 42000, 
        nadawca: "AutoSalon",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9cO9utzNC4E2ivWE6TvgIQhQKsxR4GpAElU5cxafFw&s=10"
      },
      {
        nazwa:"Fiat 500" , 
        rok:2018, 
        opis:"Mały miejski, ekonomiczny, 60k km. Cena 35000 zł" , 
        cena:35000 , 
        nadawca: "Prywatny",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mZDj_4nN7KdQRl4w-USunnMgoT7jqRjt1rxZYKjWpQ&s=10"
      }
  ]);

  function Logowanie() {
    setLogowanie(true);
    setStan("ogloszenia")
  }

  function Wylogowanie() {
    setLogowanie(false);
    setStan("login");

  }

  return (
    <>
      <Heading Zalogowany={Zalogowany} Wyloguj={() => Wylogowanie()} Ogloszenie={()=> setStan("DodanieOgloszenia")} />
      

      {stanAplikacji === "login" && <LoginForm onLogin={() => Logowanie()}  /> }

      {stanAplikacji === "ogloszenia" && <SerwisOgloszeniowy lista={tablicaOgloszen}/>}

      {stanAplikacji === "DodanieOgloszenia" && <FormularzOgloszenia DodajOgloszenie={()=> setStan("ogloszenia")} /> }

      {stanAplikacji === "poczatek" && <button className="btn btn-primary" onClick={() => setStan("login")} >Zaloguj</button>}      
      
      
    </>
  )
}

export default App
