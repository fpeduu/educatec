import { useState } from 'react';
import './App.css';
import { Cards } from './components'
import logo from './logo.png'

function App() {

  return (
    <div className='App'>
      <div className='content'>
        <h1>Recursos Educacionais Digitais para uso em sala de aula.</h1>
        <img src={ logo } alt='EducaTec' className='logo'></img>

        <Cards/>
      </div>      
    </div>
  );
}

export default App;
