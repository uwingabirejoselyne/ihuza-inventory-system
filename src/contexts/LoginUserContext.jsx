/* eslint-disable react-refresh/only-export-components */
 

import { createContext, useState, useEffect } from "react"

export const LoginUserContext = createContext()

export const LoginUserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null)

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("ihuza_login_user")
    if (storedUser) {
      setLoginUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (userData) => {
    setLoginUser(userData)
    localStorage.setItem("ihuza_login_user", JSON.stringify(userData))
  }

  const logout = () => {
    setLoginUser(null)
    localStorage.removeItem("ihuza_login_user")
  }

  return (
    <LoginUserContext.Provider
      value={{
        loginUser,
        login,
        logout,
      }}
    >
      {children}
    </LoginUserContext.Provider>
  )
}
