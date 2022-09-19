import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Auth from './layout/authLayout'
import Register from './layout/authLayout/register'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, far, fas);
function App() {
  return <Routes>
    <Route path='/' element={<Auth />} />
    <Route path="/register" element={<Register />} />
  </Routes>
}

export default App;
