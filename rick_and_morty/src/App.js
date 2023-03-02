import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail'
import About from './components/About/About'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'





function App () {


  const [characters, setCharacters] = useState([
  ]);

  const onSearch = (character) =>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then(response => response.json())
      .then(data => {
        if(data.name){
          const idArray = characters.map(char => char.id);
          let id = data.id
            if(!idArray.includes(id)){
              setCharacters((oldChars)=>[...oldChars, data])

            }else {
              window.alert('Ya existe ese personaje')
            }
        } else {
          window.alert('No hay personajes con ese ID')
        }
      })
  }

  const onClose = (id) =>{
    setCharacters(characters.filter(char => char.id !== id))
  }

  const random= (id) =>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
        if(data.name){
          const idArray = characters.map(char => char.id);
          let id = data.id
            if(!idArray.includes(id)){
              setCharacters((oldChars)=>[...oldChars, data])

            }else {
              window.alert('Ya existe ese personaje')
            }
        } else {
          window.alert('No hay personajes con ese ID')
        }
      })
  }

  console.log(characters);
  return (
    <div className='App'>
      <Nav onSearch={onSearch} random={random}/>
      <Routes>
          <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
      
    </div>
  )
}


export default App
