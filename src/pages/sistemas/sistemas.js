import React from 'react';
import Sidebar from '../../components/Sidebar/Sistemas';
import Navbar from '../../components/Navbar/Navbar';
import Sistemas from '../../components/Sistemas/Sistemas';
import '../../styles/softwares.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Sistemas />
      </div>
    </div>
  );
}


export default App;
