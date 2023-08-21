import './App.css';
import { Navbar } from "./components/navbar";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home"/>
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
