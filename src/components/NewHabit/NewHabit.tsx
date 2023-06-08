// npm modules
import { ChangeEvent, ChangeEventHandler, MouseEvent, useState } from "react"

// css
import "./Newhabit.css"

// forms
import { CreateHabitFormData } from "../../types/forms"

interface CreateHabitProps {
  handleAddHabit: (form: CreateHabitFormData) => void
}

const NewHabit = ({ handleAddHabit }: CreateHabitProps): JSX.Element => {
  const [formData, setFormData] = useState<CreateHabitFormData>({
    title: "",
    description: "",
    frequency: "",
    start_date: new Date(),
    target: 0,
    category: "",
  })

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.currentTarget.name]: evt.target.value })
  }
  const handleTextAreaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [evt.currentTarget.name]: evt.target.value })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
		handleAddHabit(formData)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          required
          autoComplete="off"
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          placeholder='"My New Habit"'
          onChange={handleInputChange}
        />
        <label>Description: </label>
        <textarea
          required
          name="description"
          id="text-input"
          value={formData.description}
          placeholder="Description"
          onChange={handleTextAreaChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewHabit
