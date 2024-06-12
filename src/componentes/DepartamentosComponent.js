import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDepartamentos } from '../features/departamentoSlice';

function DepartamentosComponent() {
  const dispatch = useDispatch();
  const departamentos = useSelector(state => state.departamento.listaDepartamentos);
  const status = useSelector(state => state.departamento.status);
  const error = useSelector(state => state.departamento.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDepartamentos());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Departamentos</h1>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      <ul>
        {departamentos.map(depto => (
          <li key={depto.id}>
            {depto.nombre} - {depto.capital}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DepartamentosComponent;
