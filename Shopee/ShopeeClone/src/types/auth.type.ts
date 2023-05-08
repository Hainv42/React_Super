import { User } from './user.type'
import { SuccessResponseApi, ErrorResponseApi } from './utils.type'

export type AuthResponse = SuccessResponseApi<{
  access_token: string
  expires: string
  user: User
}>
