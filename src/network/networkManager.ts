const BASE_URL = 'https://dummyjson.com'

export type HttpMethod = 'GET' | 'POST'

export interface RequestOptions<TBody = unknown> {
  path: string
  method: HttpMethod
  body?: TBody
  headers?: Record<string, string>
}

class NetworkManager {
  async request<TResponse = unknown, TBody = unknown>({
    path,
    method,
    body,
    headers = {},
  }: RequestOptions<TBody>): Promise<TResponse> {
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
    }

    const fullUrl = `${BASE_URL}${path}`
    const response = await fetch(fullUrl, fetchOptions)

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}))
      const errorMessage = errorBody.message || response.statusText
      throw new Error(errorMessage)
    }

    return response.json()
  }

  get<TResponse = unknown>(path: string) {
    return this.request<TResponse>({ method: 'GET', path })
  }

  post<TResponse = unknown, TBody = unknown>(path: string, body: TBody) {
    return this.request<TResponse, TBody>({ method: 'POST', path, body })
  }
}

export default new NetworkManager()
