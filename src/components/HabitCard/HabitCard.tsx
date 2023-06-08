// modules
import { MouseEvent} from "react"

// css
import './HabitCard.css'


// types
import { Habit } from "../../types/models"

interface HabitCardProps {
  habit: Habit;
  handleDeleteHabit: (id: number) => void
}

const HabitCard = (props: HabitCardProps): JSX.Element => {

  const { habit, handleDeleteHabit } = props

  const handleDeleteButton = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    handleDeleteHabit(habit.id)
  }

  return (
    <article>
      <h2><b>Title:</b> {habit.title}</h2>
      <h3><b>Description:</b> {habit.description}</h3>
      
      <button onClick={handleDeleteButton}>X</button>
    </article>
  )
}

export default HabitCard