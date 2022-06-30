import React,{useContext} from 'react'
import { Usercontext } from './Usecontext';

const Comthree = () => {
    const {user,text}=useContext(Usercontext)
    console.log(user)
    console.log(text)
  return (
    <div>
        <h1>{text}</h1>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
    </div>
  )
}

export default Comthree;