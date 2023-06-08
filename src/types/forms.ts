/* ---------==== custom forms ====--------- */

export interface CreateHabitFormData {
  title: string
  description: string
  frequency: string
  start_date: Date
  target: number
  category: string
}

export interface UpdateHabitFormData {
  title?: string
  description?: string
  frequency?: string
  target?: number
  category?: string
}

/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData {
  name: string
  email: string
  password: string
  passwordConf: string
}

export interface ChangePasswordFormData {
  curPassword: string
  newPassword: string
  newPasswordConf: string
}

export interface PhotoFormData {
  photo: File | null
}
