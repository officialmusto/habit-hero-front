// css
import styles from './MyHabits.css'

// components
import HabitCard from '../../components/HabitCard/HabitCard'

// types
import { Habit } from '../../types/models'

interface HabitsProps {
  habits: Habit[];
}

const MyHabits = (props: HabitsProps): JSX.Element => {
  const { habits } = props


  if (!habits.length) {
    return <main><h1>Loading...</h1></main>
  }

  return (
    <main className="list">
      {habits.map((habit: Habit) => {
        console.log(habit)
        return <div />
      }
      )}
    </main>
  )
}

export default MyHabits
