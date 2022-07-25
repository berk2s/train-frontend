import { JwtPayload } from 'jwt-decode'

export interface TokenResponse {
  accessToken: string
  expiresIn: number
}

export interface UserResponse {
  id?: any
  fullName?: string
  email?: string
  birthday?: Date
  gender?: string
  languages?: string[]
  trainingDays?: string[]
  trainingExperience?: string
  imageUrl?: string
  gym?: string
}

export interface TokenPayload extends JwtPayload {
  userId?: string
  fullName?: string
  userType?: 'ATHLETE' | 'PT' | 'NORMAL_USER'
}

export interface AthleteResponse extends UserResponse {
  trainingExperience?: string
  trainingDays?: string[]
}

export interface CreateBaseUser {
  fullName: string
  email: string
  password: string
  birthday: Date
  gender: string
  languages: string[]
}

export interface CreateAthleteRequest extends CreateBaseUser {
  trainingDays: string[]
  trainingExperience: string
}

export interface UpdateUserRequest {
  fullName: string
  email: string
  birthday: Date
  gender: string
  languages: string[]
}

export interface UpdateAthleteRequest extends UpdateUserRequest {
  trainingDays: string[]
  trainingExperience: string
}

export interface GymResponse {
  id?: string
  name?: string
}

export interface UserMeta {
  imageUrl: string
  name: string
  age: string
  level: string
}
