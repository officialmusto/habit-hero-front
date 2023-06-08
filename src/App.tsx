// npm modules
import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

// pages
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import Landing from "./pages/Landing/Landing"
import Habits from "./pages/MyHabits/MyHabits"

// components
import NavBar from "./components/NavBar/NavBar"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"

// services
import * as authService from "./services/authService"
import * as profileService from "./services/profileService"
import * as habitService from "./services/habitService"

// styles
import "./App.css"

// types
import { User, Habit } from "./types/models"
import { CreateHabitFormData } from "./types/forms"

function App(): JSX.Element {
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [habits, setHabits] = useState<Habit[]>([])
  const navigate = useNavigate()

  useEffect((): void => {
    const fetchHabits = async (): Promise<void> => {
      try {
        const habitData: Habit[] = await habitService.indexHabits()
        setHabits(habitData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchHabits() : setHabits([])
  }, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate("/")
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleVote = async (formData: CreateHabitFormData): Promise<void> => {
    return
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
              <Habits habits={habits} handleVote={handleVote} />
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
