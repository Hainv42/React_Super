import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

export const URL_REGISTER = 'register'
export const URL_LOGIN = 'login'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>(URL_REGISTER, body)
  },
  loginAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>(URL_LOGIN, body)
  },
  logout() {
    return http.post('/logout')
  }
}

export default authApi
