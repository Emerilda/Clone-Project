import React from 'react';
import './App.css';
import Page from './components/Page.jsx';
import Tendencias from './components/Tendencias.js';
import Barmanes from './components/Barmanes';
import Cocteles from './components/Cocteles.js';
import Ingredientes from './components/Ingredientes.js';
import {Route, Routes, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Page/>
      <Routes>
                        <Route path="/" element={Page}/>
                        <Route path="/barmanes" element={Barmanes}/>
                        <Route path="/cocteles" element={Cocteles}/>
                        <Route path="/ingredientes" element={Ingredientes}/>
                    </Routes>


    </div>
  );
}

export default App;
