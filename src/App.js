import { Fragment } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Cadastro" element={<Cadastro />} />
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
