import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_ESTUDIANTE_MUTATION = gql`
  mutation CreateEstudianteMutation(
    $carrera: String!
    $matricula: String!
  ) {
    createEstudiante(carrera: $carrera, matricula: $matricula) {
      id
      carrera
      matricula
    }
  }
`;

const CreateEstudiante = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    carrera: '',
    matricula: ''
  });

  const [createEstudiante] = useMutation(CREATE_ESTUDIANTE_MUTATION, {
    variables: {
      carrera: formState.carrera,
      matricula: formState.matricula
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createEstudiante();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.carrera}
            onChange={(e) =>
              setFormState({
                ...formState,
                carrera: e.target.value
              })
            }
            type="text"
            placeholder="Carrera"
          />
          <input
            className="mb2"
            value={formState.matricula}
            onChange={(e) =>
              setFormState({
                ...formState,
                matricula: e.target.value
              })
            }
            type="text"
            placeholder="Matrícula"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateEstudiante;
