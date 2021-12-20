import React, { createContext, ReactChild, ReactChildren, useContext, useEffect, useState } from "react"
import firebaseAuthTypes from "@firebase/auth-types"
import {auth, googleProvider } from "../firebase"
import { signInWithPopup } from "firebase/auth";

interface AuthContextType {
  currentUser: firebaseAuthTypes.UserInfo | null,
  login: Function,
  logout: Function
}


interface AuthProviderProps {
  children: ReactChild | ReactChildren
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuthContext() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: AuthProviderProps) {

  const [currentUser, setCurrentUser] = useState<firebaseAuthTypes.UserInfo | null>(null)
  const [loading, setLoading] = useState(true)

  function login() {
    return signInWithPopup(auth, googleProvider)
  }

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe

  },[])


  const value: AuthContextType = {
    currentUser: currentUser,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>
    {!loading && children}
  </AuthContext.Provider>

}