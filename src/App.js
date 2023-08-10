import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import React, { useState } from "react";

function App() {

  const [user, setUser] = useState(undefined);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser}/>}></Route>
          <Route path="/registration" element={<Registration setUser={setUser}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
