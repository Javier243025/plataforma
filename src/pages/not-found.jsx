import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <div className="w3-display-container" style={{height: '100vh'}}>
            <div className="w3-display-middle w3-center">
                <h1>
                    No se encontró lo que buscabas
                </h1>

                <Link className="w3-button w3-green" to={'/'}>
                    Ir al inicio
                </Link>
            </div>
        </div>
    )
}
