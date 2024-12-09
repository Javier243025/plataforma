import { faPlus, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../components/modal';
import { useState } from 'react';

export const HomePage = () => {
    const [ showCreateModal, setShowCreateModal ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const { logout } = useAuth()
    const navigate = useNavigate()

    const onLogout = () => {
        logout()
        navigate('/login')
    }

    const onAddButtonClicked = () => {
        setShowCreateModal(true)
    }

    const onCloseAddModalClicked = () => {
        setShowCreateModal(false)
    }

    const onAddSubmited = (event) => {
        event.preventDefault()

        setLoading(true)
        setError(null)
        try {
            throw new Error('not implemented yet')
        } catch {
            setError('Hubo un error creando el registro')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div className="w3-bar w3-top w3-green w3-large" style={{zIndex: 4}}>
                <span className="w3-bar-item">
                    Logo
                </span>

                <button onClick={onLogout} className="w3-bar-item w3-right w3-green w3-button">
                    <FontAwesomeIcon icon={faSignOut} />
                </button>
            </div>

            <div className="w3-main" style={{marginTop: '43px'}}>
                <div className='w3-container'>
                    Hola
                </div>

                {showCreateModal && <Modal onClose={onCloseAddModalClicked} closable={true}>
                    <div className='w3-container'>
                        <h3>
                            Agregar
                        </h3>
                        <form onSubmit={onAddSubmited}>
                            <input className="w3-input w3-border w3-margin-bottom" type="date" placeholder="Fecha" name="date" required/>
                            <input className="w3-input w3-border w3-margin-bottom" type="time" placeholder="Hora" name="hour" required/>
                            <select className='w3-input w3-border w3-margin-bottom'>
                                <option value="stacker">Stacker</option>
                                <option value="picking">Picking</option>
                                <option value="no-ferrosa">No Ferrosa</option>
                                <option value="spec">Spec</option>
                            </select>
                            <textarea className='w3-input w3-border w3-margin-bottom' placeholder='Detalles'/>
                            <button disabled={loading} className="w3-button w3-block w3-green w3-section w3-padding" type="submit">
                                {loading && '...'}
                                {!loading && 'Guardar'}
                            </button>
                        </form>
                    </div>
                </Modal>}

                {error && <Modal color="w3-red" onClose={() => setError(null)} closable={true}>
                    <div className="w3-container">
                        <h3 className="w3-center">
                            Error inesperado
                        </h3>
                        <div className="w3-center">
                            {error}
                        </div>
                        <br/>
                    </div>
                </Modal>}

                <button onClick={onAddButtonClicked} className="w3-button w3-circle w3-xlarge w3-green" style={{position: 'fixed', bottom: '20px', right: '20px'}}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )
}