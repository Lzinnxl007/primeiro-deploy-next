import style from '../styles/Notes.module.css'
import { useState } from 'react'
import { IoIosAdd, IoIosCheckmarkCircleOutline} from 'react-icons/io'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/Bs'
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
            <BsFillPencilFill style={{
              color: '#fff'
            }}/>
          </button>
          <button className={style.button} onClick={() => check()}>
            <IoIosCheckmarkCircleOutline style={{
              color: '#fff',
              fontSize: '1.3rem',
            }} />
          </button>
          <button className={style.button} onClick={() => remove()}>
            <BsFillTrashFill style={{
              color: '#fff',
            }}/>
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
                <IoIosAdd style={{
                  color: '#fff',
                  fontSize: '1.6rem'
                }}/>
            </button>
          </div>
          <div className={style.notes} id="notes">
            {item}
          </div>
        </div>
    </>
  )
}