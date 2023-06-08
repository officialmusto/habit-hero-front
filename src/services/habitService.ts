// services
import * as tokenService from "./tokenService"

// types
import { Habit } from "../types/models"
import { CreateHabitFormData, UpdateHabitFormData } from "../types/forms"

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/habits`

async function createHabit(
  createFormData: CreateHabitFormData
): Promise<Habit> {
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

async function indexHabits(): Promise<Habit[]> {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return res.json() as Promise<Habit[]>
}

async function updateHabit(id: string, updateFormData: UpdateHabitFormData) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateFormData),
  })
  return res.json() 
}

async function deleteHabit(id: number ) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
}

export { createHabit, indexHabits, updateHabit, deleteHabit }
