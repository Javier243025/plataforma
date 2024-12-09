import { useRef, useState } from "react"

const delay = async (milliseconds) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    })
}

export const LoginPage = () => {
    const usernameRef = useRef()
    const passwordRef = useRef()

    const [ loading, setLoading ] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault()

        setLoading(true)
        try {
            await delay(2000)
            console.log(usernameRef.current.value)
            console.log(passwordRef.current.value)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w3-modal" style={{display: "block"}}>
            <div className="w3-modal-content w3-card-4 w3-animate-zoom">
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
            </div>
        </div>
    )
}
