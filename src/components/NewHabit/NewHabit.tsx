// npm modules
import { ChangeEvent, FormEvent, useState } from "react"

// css
import "./Newhabit.css"

// forms
import { CreateHabitFormData } from "../../types/forms"

interface CreateHabitProps {
  formData: CreateHabitFormData
  setFormData: (newState: CreateHabitFormData) => void
  handleAddHabit: (form: CreateHabitFormData) => void
}

const NewHabit = (props: CreateHabitProps): JSX.Element => {
  const { setFormData, handleAddHabit, formData } = props

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.currentTarget.name]: evt.target.value })
  }
  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [evt.currentTarget.name]: evt.target.value })
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
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
          autoComplete="off"
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
