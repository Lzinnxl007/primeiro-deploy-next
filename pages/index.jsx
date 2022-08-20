import style from '../styles/Pokemons.module.css'
import { useState } from 'react'
export default function App() {
    const [names, setNames] = useState(['a', 'b', 'c', 'd', 'e'])
    const [images, setImages] = useState(['https://rickandmortyapi.com/api/character/avatar/1.jpeg','https://rickandmortyapi.com/api/character/avatar/2.jpeg', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'])

    let img = images.map((i) => <img src={i}/>)  
    let name = names.map((i) => <div className={style.items}><div>{i}</div></div>) 
   
    console.log(names)
    console.log(images)

    return (
    <>
        <div className={style.container}>
            <div className={style.titleContainer}>
              <img src="" alt="image" />
              <h1 className={style.title}>Rick and Morty</h1>
            </div>
            <div className={style.pokemons}>
                {name}
            </div>
        </div>
    </>
  )
}