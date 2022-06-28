import React, {useRef} from 'react';

const UserForm = () => {
  const userNameRef=useRef();
  const passRef=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const Name=userNameRef.current.value;
    const Passsword=passRef.current.value;
    console.log({Name,Passsword});

  }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="userName">UserName:</label>
            <input type="text" id="userName" ref={userNameRef}/>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" ref={passRef}/>
        </div>
        <button type="submit">Register</button>
    </form>
  )
}

export default UserForm