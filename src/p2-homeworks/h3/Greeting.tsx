import React, { ChangeEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  error: string // need to fix any
  totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {

  const inputClass = error ? s.error : '' // need to fix with (?:)




  return (
    <div className={s.wrap}>
      <div className={s.inner}>
        <input value={name} onChange={setNameCallback} className={`${inputClass} ${s.input}`} placeholder='Введите имя' />
        <button onClick={addUser} className={s.button} >add</button>
        <span className={s.users}>{totalUsers}</span>
      </div>

      <span className={`${s.err} ${inputClass}`}>{error}</span>
    </div>
  )
}

export default Greeting
