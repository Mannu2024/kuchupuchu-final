import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('kuchupuchu_user')
    return saved ? JSON.parse(saved) : null
  })

  const [isAuthenticated, setIsAuthenticated] = useState(!!user)

  useEffect(() => {
    if (user) {
      localStorage.setItem('kuchupuchu_user', JSON.stringify(user))
      setIsAuthenticated(true)
    } else {
      localStorage.removeItem('kuchupuchu_user')
      setIsAuthenticated(false)
    }
  }, [user])

  const login = (email, password) => {
    // Mock login - in production, this would call an API
    const mockUser = {
      id: Date.now(),
      name: email.split('@')[0],
      email: email,
      orders: []
    }
    setUser(mockUser)
    return Promise.resolve(mockUser)
  }

  const signup = (name, email, password) => {
    // Mock signup - in production, this would call an API
    const mockUser = {
      id: Date.now(),
      name: name,
      email: email,
      orders: []
    }
    setUser(mockUser)
    return Promise.resolve(mockUser)
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  const updateProfile = (data) => {
    setUser(prev => ({ ...prev, ...data }))
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      signup,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  )
}