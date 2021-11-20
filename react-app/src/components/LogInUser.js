import React, {useState} from 'react';
import { api } from "../api/myapi";

export function LogInUser (){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    function logInUser(){
        const user = {
        email: email,
        password: password
        }

    fetch(`${api.root}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json().then(result=>alert('Logged in')))
    .catch(err=>alert(err))
    }

    return (
        <form className="mt-5">
        <div className="input-group mb-3">
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="E-mail" id="basic-url" aria-describedby="basic-addon3"></input>
        </div>
        <div className="input-group mb-3">
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Password" aria-label="Amount (to the nearest dollar)"></input>
        </div>
        <button onClick={logInUser} type="button" className="btn btn-success">SignIn</button>
        </form>
    )
}