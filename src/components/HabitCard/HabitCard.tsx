// assets
import defaultPic from "../../assets/icons/habit.png"

// css
import './HabitCard.css'


// types
import { Habit } from "../../types/models"
import { CreateHabitFormData } from "../../types/forms"

interface HabitCardProps {
  habit: Habit;
}

const HabitCard = (props: HabitCardProps): JSX.Element => {

  const { habit } = props

  return (
    <article>
      <h2><b>Title:</b> {habit.title}</h2>
      <h3><b>Description:</b> {habit.description}</h3>
    </article>
  )
}

export default HabitCard