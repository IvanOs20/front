import React from 'react';
import CreateEstudiante from './CreateEstudiante';
import Header from './Header';
import EstudianteList from './EstudianteList';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<EstudianteList />} />
          <Route path="/create" element={<CreateEstudiante />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;