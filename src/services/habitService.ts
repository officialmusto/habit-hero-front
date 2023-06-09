// services
import * as tokenService from "./tokenService"

// types
import { Habit } from "../types/models"
import { CreateUpdateHabitFormData } from "../types/forms"

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/habits`

async function createHabit(
  createFormData: CreateUpdateHabitFormData
): Promise<Habit> {

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createFormData),
  })
  return res.json() as Promise<Habit>
}

async function indexHabits(): Promise<Habit[]> {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return res.json() as Promise<Habit[]>
}

async function updateHabit(
  updateFormData: CreateUpdateHabitFormData
): Promise<Habit> {
  const res = await fetch(`${BASE_URL}/${updateFormData.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateFormData),
  })

  return res.json() as Promise<Habit>
}

async function deleteHabit(id: number) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return
}

export { createHabit, indexHabits, updateHabit, deleteHabit }
