import React from 'react';

const Estudiante = ({ estudiante, index }) => {
  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1}.</span>
      </div>
      <div className="ml1">
        <div>
          ID: {estudiante.id}<br />
          Carrera: {estudiante.carrera}<br />
          Matrícula: {estudiante.matricula}
        </div>
      </div>
    </div>
  );
};

export default Estudiante;
