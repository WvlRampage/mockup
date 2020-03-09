import React from 'react';
import LeftFilter from './components/leftFilter/leftFilter'
import Menu from './components/menu'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <LeftFilter/>
        <Menu/>
      </div>
    </div>
  );
}

export default App;
