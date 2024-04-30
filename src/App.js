import { Fragment } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login/login';
import Cliente from './pages/cliente/cliente'
import Tickets from './pages/tickets/tickets'
import Softwares from './pages/softwares/softwares'
import Dashboard from './pages/dashboard/dashboard'
import Sistemas from './pages/sistemas/sistemas'


function App() {
  return (
    <BrowserRouter>
      <Fragment>
          <Routes>
              <Route path="" element={<Login />} />
              <Route path="/Painel" element={<Dashboard />} />
              <Route path="/Cliente" element={<Cliente />} />
              <Route path="/Tickets" element={<Tickets />} />
              <Route path="/Softwares" element={<Softwares />} />
              <Route path="/Sistemas" element={<Sistemas />} />
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
