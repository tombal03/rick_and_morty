import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './App.module.css'
import NavBar from './components/NavBar/NavBar.jsx';
import { useState } from 'react';
import axios from 'axios';
import {Routes,Route,useLocation} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const EMAIL = 'ejemplo31@gmail.com';
const PASSWORD = 'zapallo3'

function App() {
 
   const [characters, setCharacters] = useState([]);
   // const onSearch = () => {
   //    setCharacters([...characters, example])
   // }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };


   const onClose = (id) =>{
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id)
         })
      )
   };

   const location = useLocation();

   const navigate = useNavigate();
   

   const [access, setAccess] = useState(false)

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className={style.App}>
         {
            location.pathname !== '/' ? <NavBar onSearch={onSearch}/> : null
         }
         
         
         <Routes>
            <Route path='/' element= {<Form login={login}/>}></Route>
            <Route path='/about' element= {<About/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>

      </div>
   );
}

export default App;
