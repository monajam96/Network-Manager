
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' 

export interface RequestOptions<TBody = unknown> {
  url: string
  method: HttpMethod
  body?: TBody
  headers?: Record<string, string>
}

export interface NetworkError {
  status: number
  message: string
}

class NetworkManager {
  request<TResponse = unknown, TBody = unknown>({
    url,
    method,
    body,
    headers = {},
  }: RequestOptions<TBody>): Promise<TResponse> {
    const token = localStorage.getItem('token')

    const allHeaders: HeadersInit = {
      'Content-Type': 'application/json',
      ...headers,
    }

    if (token) {
      allHeaders['Authorization'] = `Bearer ${token}`
    }

    const fetchOptions: RequestInit = {
      method,
      headers: allHeaders,
      body: method !== 'GET' && body ? JSON.stringify(body) : undefined,
    }

    return fetch(url, fetchOptions)
      .then((response) => {
        const isJson = response.headers.get('content-type')?.includes('application/json')
        return (isJson ? response.json() : Promise.resolve(null)).then((responseData) => {
          if (!response.ok) {
            const message = (responseData as { message?: string })?.message ?? 'Unknown error'
            return Promise.reject({ status: response.status, message } as NetworkError)
          }
          return responseData as TResponse
        })
      })
  }

  get<TResponse = unknown>(url: string) {
    return this.request<TResponse>({ method: 'GET', url })
  }

  post<TResponse = unknown, TBody = unknown>(url: string, body: TBody) {
    return this.request<TResponse, TBody>({ method: 'POST', url, body })
  }

  put<TResponse = unknown, TBody = unknown>(url: string, body: TBody) {
    return this.request<TResponse, TBody>({ method: 'PUT', url, body })
  }

  delete<TResponse = unknown>(url: string) {
    return this.request<TResponse>({ method: 'DELETE', url })
  }
}

export default new NetworkManager()
