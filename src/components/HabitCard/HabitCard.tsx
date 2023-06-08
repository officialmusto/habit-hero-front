// assets
import defaultPic from "../../assets/icons/habit.png"

// components


// types
import { Habit } from "../../types/models"
import { CreateHabitFormData } from "../../types/forms"

interface HabitCardProps {
  habit: Habit;
  handleVote: (formData: CreateHabitFormData) => Promise<void>
}

const HabitCard = (props: HabitCardProps): JSX.Element => {

  const { habit } = props

  return (
    <article>
      <h1>{habit.title}</h1>
      <h3>{habit.description}</h3>
    </article>
  )
}

export default HabitCard