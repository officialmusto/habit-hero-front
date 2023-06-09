/* ---------==== custom forms ====--------- */

export interface CreateUpdateHabitFormData {
  id?: number
  title: string
  description: string
  frequency: string
  start_date: Date
  target: string
  category: string
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
