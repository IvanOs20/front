import React from 'react';
import Estudiante from './Estudiante';
import { useQuery, gql } from '@apollo/client';

const ESTUDIANTES_QUERY = gql`
  query {
    estudiantes {
      id
      carrera
      matricula
    }
  }
`;

const EstudianteList = () => {
  const { data } = useQuery(ESTUDIANTES_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.estudiantes.map((estudiante, index) => (
            <Estudiante key={estudiante.id} estudiante={estudiante} index={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default EstudianteList;
