import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from './Detail.module.css'

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className={style.detail}>
            <p> Name: "{character.name && character.name}"</p>
            <p> Status: "{character.status && character.status}"</p>
            <p> Species: "{character.species && character.species}"</p>
            <p> Gender: "{character.gender && character.gender}"</p>
            <p> Origin: "{character.origin?.name && character.origin?.name}"</p>
            <img src={character.image && character.image} alt="" />
        </div>
    )
}

export default Detail;