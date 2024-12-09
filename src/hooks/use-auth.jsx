import { useEffect, useState } from "react"

const USER_ID_KEY = 'userId'

export const useAuth = () => {
    const [ userState, setUserState ] = useState('PENDING')

    const userIdSaved = localStorage.getItem(USER_ID_KEY)
    useEffect(() => {
        if(!userIdSaved) {
            setUserState('UNAUTHENTICATED')
        } else {
            setUserState('AUTHENTICATED')
        }
    }, [ userIdSaved ])

    const login = (userId) => {
        localStorage.setItem(USER_ID_KEY, userId)
        setUserState('AUTHENTICATED') 
    }
    const logout = () => {
        localStorage.removeItem(USER_ID_KEY)
        setUserState('UNAUTHENTICATED') 
    }

    return { userState, login, logout }
}
