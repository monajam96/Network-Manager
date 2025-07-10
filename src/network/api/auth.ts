import NetworkManager from '../networkManager'

interface LoginPayload {
  username: string
  password: string
}

interface LoginResponse {
  token: string
  // optionally add: user info, expiration, etc.
}

export function login(payload: LoginPayload) {
  return NetworkManager.post<LoginResponse, LoginPayload>(
    '/auth/login',
    payload  )
}
