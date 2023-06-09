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
    <article className="habit-card">
      <h2 className="title">{habit.title}</h2>
      <h3 className="description">{habit.description}</h3>
      
      <button onClick={handleUpdateButton} className="edit-button">edit</button>
      <button onClick={handleDeleteButton} className="delete-button">X</button>
    </article>
  )
}

export default HabitCard