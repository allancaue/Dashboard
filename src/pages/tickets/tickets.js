import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Tickets from '../../components/Tickets/Tickets';
import '../../styles/tickets.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Tickets />
      </div>
    </div>
  );
}


export default App;
