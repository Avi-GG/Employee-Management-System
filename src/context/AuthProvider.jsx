import React, { useEffect } from 'react'
import { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'
import { useState } from 'react'


export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const data = getLocalStorage()
        setUserData(data)
     
    }, [])
        
  

  return (
    <div>
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
