/* eslint-disable react-refresh/only-export-components */
 

import { createContext, useState } from "react"

export const LoginUserContext = createContext()

export const LoginUserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState({
    username: "Admin",
    email: "admin@ihuza.com",
    role: "Admin",
  })

  const login = (userData) => {
    setLoginUser(userData)
  }

  const logout = () => {
    setLoginUser(null)
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
