// css
import  "../MyHabits/MyHabits.css"

// components
import HabitCard from "../../components/HabitCard/HabitCard"

// types
import { Habit } from "../../types/models"

interface HabitsProps {
  habits: Habit[]
}

const MyHabits = (props: HabitsProps): JSX.Element => {
  const { habits } = props

  if (!habits.length) {
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
        return <HabitCard habit={habit} />
      })}
    </main>
  )
}

export default MyHabits

//! MOVE MAPPED HABITS TO NEW PAGE
//! DOUBLE-CHECK PAGES
//! FINISH cr *UD* COMPONENTS FRONTEND (HABITSAUTHSERVCE)
//!

//! CSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
