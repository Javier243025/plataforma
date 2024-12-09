import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Modal } from "../components/modal"
import { useAuth } from "../hooks/use-auth"

export const LoginPage = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const usernameRef = useRef()
    const passwordRef = useRef()

    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const onSubmit = async (event) => {
        event.preventDefault()

        setLoading(true)
        setError(null)
        try {
            if(usernameRef.current.value === 'admin' && passwordRef.current.value === '270793') {
                login('admin')
                navigate('/home')
            } else {
                setError('Hubo un error con el usuario o la contraseña, por favor verificalos e intenta de nuevo')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal>
            <div className="w3-center">
                <br/>
                <img src="https://www.w3schools.com/w3css/img_avatar4.png" alt="Avatar" style={{width: '30%'}} className="w3-circle w3-margin-top"/>
            </div>
            <form onSubmit={onSubmit} className="w3-container">
                <label htmlFor="username">
                    <b>Username</b>
                </label>
                <input disabled={loading} ref={usernameRef} id="username" className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Usuario" name="username" required/>
                <label htmlFor="password">
                    <b>Contraseña</b>
                </label>
                <input disabled={loading} ref={passwordRef} id="password" className="w3-input w3-border w3-margin-bottom" type="password" placeholder="Contraseña" name="password" required/>
                <button disabled={loading} className="w3-button w3-block w3-green w3-section w3-padding" type="submit">
                    {loading && '...'}
                    {!loading && 'Entrar'}
                </button>
            </form>
            {error && <Modal color="w3-red" onClose={() => setError(null)} closable={true}>
                <div className="w3-container">
                    <h3 className="w3-center">
                        Error iniciando sesión
                    </h3>
                    <div className="w3-center">
                        {error}
                    </div>
                    <br/>
                </div>
            </Modal>}
        </Modal>
    )
}
