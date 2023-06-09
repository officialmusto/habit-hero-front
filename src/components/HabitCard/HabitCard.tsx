// modules
import { MouseEvent} from "react"

// css
import './HabitCard.css'


// types
import { Habit } from "../../types/models"

interface HabitCardProps {
  habit: Habit;
  handleDeleteHabit: (id: number) => void
  handleUpdateStart: (habit: Habit) => void
}

const HabitCard = (props: HabitCardProps): JSX.Element => {

  const { habit, handleDeleteHabit, handleUpdateStart } = props

  const handleDeleteButton = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    handleDeleteHabit(habit.id)
  }
  const handleUpdateButton = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    handleUpdateStart(habit)
  }

  return (
    <article>
      <h2><b>Title:</b> {habit.title}</h2>
      <h3><b>Description:</b> {habit.description}</h3>
      
      <button onClick={handleDeleteButton}>X</button>
      <button onClick={handleUpdateButton}>edit</button>
    </article>
  )
}

export default HabitCard