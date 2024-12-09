import { useNavigate } from 'react-router-dom'
import { Loader } from '../components/loader'
import { useAuth } from '../hooks/use-auth'

export const SplashPage = () => {
    const navigate = useNavigate()
    const { userState } = useAuth()

    if(userState === 'AUTHENTICATED') {
        navigate('/home')
    } else {
        navigate('/login')
    }

    return (
        <div className="w3-display-container" style={{height: '100vh'}}>
            <div className="w3-display-middle">
                <Loader/>
            </div>
        </div>
    )
}
