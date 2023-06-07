// services
import * as tokenService from "./tokenService"

// types
import { Profile } from "../types/models"
import { HabitFormData } from "../types/forms"

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/votes`

async function createHabit(createFormData: HabitFormData): Promise<Habit> {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createFormData)
    })
    return res.json() as Habit
  } catch (error) {
    console.log(error)
  }
}

export { createHabit }
