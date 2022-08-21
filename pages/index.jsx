import style from '../styles/Notes.module.css'
import { useState } from 'react'

export default function App() {
    const [value, setValue] = useState('')
    const [item, setItem] = useState('')
    
    const check = () => {
        const text = document.querySelector('#text')
        text.style.textDecoration = 'line-through'
    }

    const remove = () => {
        const note = document.querySelector('#note')
        const notes = document.querySelector('#notes')
        notes.removeChild(note)
    }
    const createItem = () => {
      
        setItem(<div className={style.item} id="note">
          <div className={style.text} id="text">{value}</div>
          <div className={style.buttons}>
          <button className={style.button}>
            
          </button>
          <button className={style.button} onClick={() => check()}>
            
          </button>
          <button className={style.button} onClick={() => remove()}>
            
          </button>
          </div>
        </div>)
        
        
    }
    return (
    <>
        <div className={style.container}>
          <div className={style.add}>
            <input type="text" className={style.display} value={value} onInput={(e) => setValue(e.target.value)}/>
            <button className={style.addButton} onClick={() => createItem()}>
                
            </button>
          </div>
          <div className={style.notes} id="notes">
            {item}
          </div>
        </div>
    </>
  )
}