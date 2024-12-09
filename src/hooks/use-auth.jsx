import { useEffect, useState } from "react"

export const useAuth = () => {
    const [ userState, setUserState ] = useState('PENDING')

    const userIdSaved = localStorage.getItem('userId')
    useEffect(() => {
        if(!userIdSaved) {
            setUserState('UNAUTHENTICATED')
        } else {
            setUserState('AUTHENTICATED')
        }
    }, [ userIdSaved ])

    return { userState }
}
