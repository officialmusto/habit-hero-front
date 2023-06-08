// services
import * as tokenService from "./tokenService"

// types
import { Habit } from "../types/models"
import { HabitFormData } from "../types/forms"

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/habits`

async function createHabit(
  createFormData: HabitFormData
): Promise<Habit | undefined> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createFormData),
  })
  return res.json() as unknown as Habit
}

async function indexHabit(): Promise<Habit[]> {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return res.json() as Promise<Habit[]>
}

export { createHabit, indexHabit }
