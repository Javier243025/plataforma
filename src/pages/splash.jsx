import { useNavigate } from 'react-router-dom'
import { Loader } from '../components/loader'

export const SplashPage = () => {
    const navigate = useNavigate()

    return (
        <div className="w3-display-container" style={{height: '100vh'}}>
            <div className="w3-display-middle">
                <Loader/>
            </div>
        </div>
    )
}
