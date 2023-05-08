import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

export const URL_REGISTER = 'register'
export const URL_LOGIN = 'login'

export const registerAccount = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>(URL_REGISTER, body)
}
export const loginAccount = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>(URL_LOGIN, body)
}

export const logout = () => {
  return http.post('/logout')
}
