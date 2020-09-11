import React from 'react';
import './style.css';
import Header from './components/Header';
import api from './Services/api';
import Main from './pages/main';


const App = () => (

    <div className="App">
      <Header />
      <Main />
    </div>
 )


export default App;
