import NetworkManager from '../networkManager'

interface LoginPayload {
  email: string
  password: string
}

interface LoginResponse {
  token: string
}

export function login(payload: LoginPayload) {
  return NetworkManager.post<LoginResponse, LoginPayload>(
    'api', 
    payload
  )
}
