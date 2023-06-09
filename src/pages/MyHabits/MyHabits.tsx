// modules
import { useState, useEffect } from "react"

// css
import "../MyHabits/MyHabits.css"

// components
import HabitCard from "../../components/HabitCard/HabitCard"
import CreateUpdateHabit from "../../components/CreateUpdateHabit/CreateUpdateHabit"

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
    id: undefined,
    title: "",
    description: "",
    frequency: "",
    start_date: new Date(),
    target: "",
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
    const CreateUpdateHabit = await habitService.createHabit(habitFormData)
    setHabits([CreateUpdateHabit, ...habits])
    setFormData({
      id: undefined,
      title: "",
      description: "",
      frequency: "",
      start_date: new Date(),
      target: "",
      category: "",
    })
  }

  const handleUpdateHabit = async (updateForm: CreateHabitFormData): Promise<void> => {
    const updatedHabit = await habitService.updateHabit(updateForm)
    const updatedHabits = habits.map(habit => {
      return habit.id === updatedHabit.id ? updatedHabit : habit
    })
    setHabits(updatedHabits)
  }

  const handleUpdateStart = (habit: Habit): void => {
    setFormData({
      id: habit.id,
      title: habit.title,
      description: habit.description,
      frequency: habit.frequency,
      start_date: habit.start_date,
      target: habit.target,
      category: habit.category,
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
            handleUpdateStart={handleUpdateStart}
            />
            )
          })}
          <CreateUpdateHabit
          handleAddHabit={handleAddHabit}
          formData={formData}
          setFormData={setFormData}
          handleUpdateHabit={handleUpdateHabit}
          />
    </main>
  )
}

export default MyHabits

//! DOUBLE-CHECK PAGES
//! FINISH cr *UD* COMPONENTS FRONTEND (HABITSAUTHSERVCE)
//!

//! CSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// check and see backend to stop users from updating unnecessary keys