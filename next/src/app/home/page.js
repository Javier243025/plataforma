'use client'

import { faMinus, faPlus, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PENDING, UNAUTHENTICATED, useAuth } from '../../hooks/use-auth';
import { useRouter } from 'next/navigation';
import { Modal } from '../../components/modal';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/loader';

export default function HomePage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [temperature, setTemperature] = useState(0);

  const { userState, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(userState === UNAUTHENTICATED) {
      router.replace('/login');
    }
  }, [ userState ])

  const onLogout = () => {
    logout();
    router.replace('/login');
  };

  const onAddButtonClicked = () => {
    setShowCreateModal(true);
  };

  const onCloseAddModalClicked = () => {
    setShowCreateModal(false);
  };

  const onAddSubmited = (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    try {
      throw new Error('not implemented yet');
    } catch {
      setError('Hubo un error creando el registro');
    } finally {
      setLoading(false);
    }
  };

  if([PENDING, UNAUTHENTICATED].includes(userState)) {
    return (
      <div className="w3-display-container" style={{ height: '100vh' }}>
        <div className="w3-display-middle">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="w3-bar w3-top w3-green w3-large" style={{ zIndex: 4 }}>
        <span className="w3-bar-item">Logo</span>

        <button
          onClick={onLogout}
          className="w3-bar-item w3-right w3-green w3-button"
        >
          <FontAwesomeIcon icon={faSignOut} />
        </button>
      </div>

      <div className="w3-main" style={{ marginTop: '43px' }}>
        <div className="w3-container">Hola</div>

        {showCreateModal && (
          <Modal onClose={onCloseAddModalClicked} closable={true}>
            <div className="w3-container">
              <h3>Agregar</h3>
              <form onSubmit={onAddSubmited}>
                <label htmlFor="date">
                  <b>Fecha</b>
                </label>
                <input
                  id="date"
                  className="w3-input w3-border w3-margin-bottom"
                  type="date"
                  placeholder="Fecha"
                  name="date"
                  required
                />
                <label htmlFor="time">
                  <b>Hora</b>
                </label>
                <input
                  id="time"
                  className="w3-input w3-border w3-margin-bottom"
                  type="time"
                  placeholder="Hora"
                  name="hour"
                  required
                />
                <label htmlFor="band">
                  <b>Banda</b>
                </label>
                <select
                  id="band"
                  className="w3-input w3-border w3-margin-bottom"
                >
                  <option value="stacker">Stacker</option>
                  <option value="picking">Picking</option>
                  <option value="no-ferrosa">No Ferrosa</option>
                  <option value="spec">Spec</option>
                </select>
                <label htmlFor="temperature">
                  <b>Temperatura del motor</b>
                </label>
                <div id="temperature" className="w3-row w3-margin-bottom">
                  <button
                    type="button"
                    className="w3-button w3-col"
                    style={{ width: '10%' }}
                    onClick={() => setTemperature((e) => e - 1)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input
                    className="w3-border w3-col"
                    style={{
                      width: '80%',
                      padding: '8px',
                      display: 'block',
                      border: 'none',
                      borderBottom: '1px solid #ccc',
                    }}
                    type="number"
                    placeholder="Temperatura"
                    name="temperature"
                    required
                    disabled
                    value={temperature}
                  />
                  <button
                    type="button"
                    className="w3-button w3-col"
                    style={{ width: '10%' }}
                    onClick={() => setTemperature((e) => e + 1)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <label htmlFor="observations">
                  <b>Observaciones</b>
                </label>
                <textarea
                  id="observations"
                  className="w3-input w3-border w3-margin-bottom"
                  placeholder="Detalles"
                />
                <button
                  disabled={loading}
                  className="w3-button w3-block w3-green w3-section w3-padding"
                  type="submit"
                >
                  {loading && '...'}
                  {!loading && 'Guardar'}
                </button>
              </form>
            </div>
          </Modal>
        )}

        {error && (
          <Modal color="w3-red" onClose={() => setError(null)} closable={true}>
            <div className="w3-container">
              <h3 className="w3-center">Error inesperado</h3>
              <div className="w3-center">{error}</div>
              <br />
            </div>
          </Modal>
        )}

        <button
          onClick={onAddButtonClicked}
          className="w3-button w3-circle w3-xlarge w3-green"
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};
