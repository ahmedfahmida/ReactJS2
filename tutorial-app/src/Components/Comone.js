import React, { useState } from 'react'
import Comtwo from './Comtwo'
import { Usercontext } from './Usecontext'


export const Comone = () => {
    const[user,setuser]=useState({id:1, name:"nishi"})
    const[text,setText]=useState("My code is not working")
  return (
   
        <Usercontext.Provider value={{user,text}}>
            <Comtwo/>
        </Usercontext.Provider>
    
  )
}