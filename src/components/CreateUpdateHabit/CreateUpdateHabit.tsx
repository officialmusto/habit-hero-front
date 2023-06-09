// npm modules
import { ChangeEvent, FormEvent } from "react"

// css
import "./CreateUpdateHabit.css"

// forms
import { CreateUpdateHabitFormData } from "../../types/forms"

interface CreateHabitProps {
  formData: CreateUpdateHabitFormData
  setFormData: (newState: CreateUpdateHabitFormData) => void
  handleAddHabit: (form: CreateUpdateHabitFormData) => void
  handleUpdateHabit: (updatedState: CreateUpdateHabitFormData) => void
}

const NewHabit = (props: CreateHabitProps): JSX.Element => {
  const { setFormData, handleAddHabit, handleUpdateHabit, formData } = props

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.currentTarget.name]: evt.target.value })
  }
  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [evt.currentTarget.name]: evt.target.value })
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (formData.id) {
      handleUpdateHabit(formData)
    } else {
      handleAddHabit(formData)
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="form">
        <label className="title">Title: </label>
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
        <label className="description">Description: </label>
        <textarea
          required
          autoComplete="off"
          name="description"
          id="text-input"
          value={formData.description}
          placeholder="Description"
          onChange={handleTextAreaChange}
          className="textarea"
        />
        <button type="submit" className="add-habit-button">ADD HABIT</button>
      </form>
    </main>
  )
}

export default NewHabit
