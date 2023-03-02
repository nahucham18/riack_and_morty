import style from './Searchbar.module.css'
import { useState } from 'react'

export default function SearchBar({onSearch ,random}) {

   const [ character, setCharacter ] = useState('')

   const handleOnChange = (event) =>{
      setCharacter(event.target.value)
   }

   const idRandom = (event) =>{
      let min=1;
      let max = 826;
      let numRandom = Math.floor(Math.random()*(max-min+1)+1)
      random(numRandom);
   }
   
   return (
      <div className={style.container}>
            <button className={style.random} onClick={idRandom} >Random</button>
            <input className={style.input} onChange={handleOnChange} type='search' />
            <button className={style.btn} onClick={()=>onSearch(character)}>Agregar</button>
         </div>
      
   );
}
