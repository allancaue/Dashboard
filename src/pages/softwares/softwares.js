import React from 'react';
import Sidebar from '../../components/Sidebar/Softwares';
import Navbar from '../../components/Navbar/Navbar';
import Softwares from '../../components/Softwares/Softwares';
import '../../styles/softwares.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Softwares />
      </div>
    </div>
  );
}


export default App;
