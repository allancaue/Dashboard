import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import './dashboard.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}


export default App;
