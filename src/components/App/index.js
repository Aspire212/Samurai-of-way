import React from 'react';
import Header from '../Header';
import Nav from '../Nav';
import Content from '../Content'
import './App.css';

const App = ({ dialogsData, messagesData, postData }) => {
    return (
      <div className='wrapper'>
        <Header />
        <div className='app-body'>
          <Nav />
          <Content dialogsData={dialogsData} messagesData={messagesData} postData={postData} />
        </div>
      </div>
    )
}

export default App;