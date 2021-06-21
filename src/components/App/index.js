import React from 'react';
import Header from '../Header';
import Nav from '../Nav';
import Content from '../Content'
import './App.css';

const App = () => {
    return (
      <div className='wrapper'>
        <Header />
        <div className='app-body'>
          <Nav />
          <Content />
        </div>
      
      </div>
    )
}

export default App;