import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Nav} from './components/Nav'; 
import {RegisterUser} from './components/RegisterUser';
import {LogInUser} from './components/LogInUser';




ReactDOM.render(
<BrowserRouter>
<Nav/>
<Routes>
  <Route path="/register" element={<RegisterUser/>}/>
  <Route path="/login" element={<LogInUser/>}/>
 
</Routes>
</BrowserRouter>,
  document.getElementById('root')
);
