import { useNavigate } from "react-router-dom"
import { AUTHENTICATED, PENDING, UNAUTHENTICATED, useAuth } from "../hooks/use-auth"
import { Loader } from './loader'
import { useEffect } from "react"
import PropTypes from "prop-types"

export const RedirectIfNeeded = ({ children, requiresAuth = false }) => {
    const navigate = useNavigate()
    const { userState } = useAuth()

    useEffect(() => {
        if(requiresAuth && userState === UNAUTHENTICATED) {
            navigate('/login')
        }
    }, [ userState ])

    const loader = (
        <div className="w3-display-container" style={{height: '100vh'}}>
            <div className="w3-display-middle">
                <Loader/>
            </div>
        </div>
    )

    if(userState === PENDING) {
        return loader
    }

    if(requiresAuth) {
        if(userState === AUTHENTICATED) {
            return (
                <div>
                    {children}
                </div>
            )
        } else {
            return loader
        }
    }

    return (
        <div>
            {children}
        </div>
    )
}

RedirectIfNeeded.propTypes = {
    children: PropTypes.node.isRequired,
    requiresAuth: PropTypes.bool
}
