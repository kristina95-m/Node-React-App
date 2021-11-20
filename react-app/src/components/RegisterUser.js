import React, {useState} from 'react';
import { api } from "../api/myapi";

export function RegisterUser (){
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]=useState('');

    function registerUser(){
        const user = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
        }
        
    fetch(`${api.root}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(alert (`User with name ${firstName} is registered`))
    .catch(err=>alert(err))
    }

    return(
    <form className="mt-5">
        <div className="input-group mt-3">
            <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} className="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>    
        <div className="input-group mt-3">
            <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} className="form-control" placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
        </div>
        <div className="input-group mt-3">
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="E-mail" id="basic-url" aria-describedby="basic-addon3"></input>
        </div>
        <div className="input-group mt-3">
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Password" aria-label="Amount (to the nearest dollar)"></input>
        </div>
        <button onClick={registerUser} type="button" className="btn btn-success">Sign Up</button>
    </form>
    )
}