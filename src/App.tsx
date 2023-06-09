// npm modules
import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

// pages
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import Landing from "./pages/Landing/Landing"
import MyHabits from "./pages/MyHabits/MyHabits"

// components
import NavBar from "./components/NavBar/NavBar"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"

// services
import * as authService from "./services/authService"

// styles
import "./App.css"

// types
import { User } from "./types/models"

function App(): JSX.Element {
  const [user, setUser] = useState<User | null>(authService.getUser())
  const navigate = useNavigate()
  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate("/")
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<Landing user={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/habits"
          element={
            <ProtectedRoute user={user}>
              <MyHabits user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
      </Routes>
    </>
  )
}

export default App
