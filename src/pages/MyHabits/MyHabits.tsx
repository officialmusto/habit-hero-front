// modules
import { useState, useEffect } from "react"

// css
import "../MyHabits/MyHabits.css"

// components
import HabitCard from "../../components/HabitCard/HabitCard"
import NewHabit from "../../components/NewHabit/NewHabit"

// form
import { CreateHabitFormData } from "../../types/forms"

// types
import { Habit, User } from "../../types/models"

//services
import * as habitService from '../../services/habitService'

interface HabitsProps {
  user: User
}

const MyHabits = (props: HabitsProps): JSX.Element => {
  const { user } = props
  const [habits, setHabits] = useState<Habit[]>([])
  const [formData, setFormData] = useState<CreateHabitFormData>({
    title: "",
    description: "",
    frequency: "",
    start_date: new Date(),
    target: 0,
    category: "",
  })

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

  const handleAddHabit = async (habitFormData: CreateHabitFormData) => {
    const newHabit = await habitService.createHabit(habitFormData)
    setHabits([newHabit, ...habits])
    setFormData({
      title: "",
      description: "",
      frequency: "",
      start_date: new Date(),
      target: 0,
      category: "",
    })
  }
  
  const handleDeleteHabit = async (id: number): Promise<void> => {
    await habitService.deleteHabit(id)
    setHabits(habits.filter(b => b.id !== id))

  }

  if (!habits) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  return (
    <main className="list">
      <h1 className="page-title">YOUR HABITS</h1>
      {habits.map((habit: Habit) => {
        return (
          <HabitCard
            key={habit.id}
            habit={habit}
            handleDeleteHabit={handleDeleteHabit}
            />
            )
          })}
          <NewHabit
          handleAddHabit={handleAddHabit}
          formData={formData}
          setFormData={setFormData}
          />
    </main>
  )
}

export default MyHabits

//! DOUBLE-CHECK PAGES
//! FINISH cr *UD* COMPONENTS FRONTEND (HABITSAUTHSERVCE)
//!

//! CSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
