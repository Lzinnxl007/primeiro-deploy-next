import style from '../styles/Pokemons.module.css'
import { useState } from 'react'
export default function App() {
 
    return (
    <>
        <div className={style.container}>
            <div className={style.titleContainer}>
              <h1 className={style.title}>Rick and Morty</h1>
            </div>
            <div className={style.pokemons}>
                
            </div>
        </div>
    </>
  )
}