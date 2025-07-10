import NetworkManager from '../networkManager'

interface LoginPayload {
  username: string
  password: string
  expiresInMins?: number // optional if you want to support it
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
