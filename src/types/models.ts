/* --------===== custom models ====-------- */

export interface Habit {
  id: number
  title: string
  description: string
  frequency: string
  start_date: Date
  target: string
  profileId: number
  updatedAt: string
  createdAt: string
  last_completed_date?: Date
}

/* ---------===== auth models =====--------- */

export interface Profile {
  name: string
  photo?: string
  id: number
  createdAt: string
  updatedAt: string
}

export interface User {
  name: string
  email: string
  profile: { id: number }
  id: number
  createdAt: string
  updatedAt: string
}
