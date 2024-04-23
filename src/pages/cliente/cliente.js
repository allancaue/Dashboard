import React from 'react';
import Sidebar from '../../components/Sidebar/Cliente';
import Navbar from '../../components/Navbar/Navbar';
import Cliente from '../../components/Cliente/Cliente';
import '../../styles/dashboard.css';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Cliente />
      </div>
    </div>
  );
}

export default App;
