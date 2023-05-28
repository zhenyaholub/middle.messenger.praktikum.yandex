import { METHOD, type Options, type OptionsWithoutMethod } from '../types/http'
import { queryStringify } from './helpers'
import { type IHTTPTransport } from './httpTransport.types'

export class HTTPTransport implements IHTTPTransport {
  baseUrl: string

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async get (url?: string, options: OptionsWithoutMethod = {}) {
    return await this.request({ ...options, method: METHOD.GET }, url)
  }

  async post (url?: string, options: OptionsWithoutMethod = {}) {
    return await this.request({ ...options, method: METHOD.POST }, url)
  }

  async put (url?: string, options: OptionsWithoutMethod = {}) {
    return await this.request({ ...options, method: METHOD.PUT }, url)
  }

  async patch (url?: string, options: OptionsWithoutMethod = {}) {
    return await this.request({ ...options, method: METHOD.PATCH }, url)
  }

  async delete (url?: string, options: OptionsWithoutMethod = {}) {
    return await this.request({ ...options, method: METHOD.DELETE }, url)
  }

  async request (
    {
      method = METHOD.GET,
      data,
      headers = { 'Content-Type': 'application/json' },
      timeout = 5000,
      withCredentials = false
    }: Options,
    url?: string
  ): Promise<{ status: number, response: any }> {
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      if (withCredentials) {
        xhr.withCredentials = true
      }
      const isGetRequest = method === METHOD.GET
      const isGetRequestWithQuery = isGetRequest && data
      const endpoint = isGetRequestWithQuery
        ? this.baseUrl + (url ?? '') + queryStringify(data)
        : this.baseUrl + (url ?? '')
      const body = data instanceof FormData ? data : JSON.stringify(data)

      xhr.open(method, endpoint)

      xhr.timeout = timeout

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value)
      })

      if (isGetRequest) {
        xhr.send()
      } else {
        xhr.send(body)
      }

      xhr.onload = () => {
        resolve({ status: xhr.status, response: xhr.response })
      }
      xhr.ontimeout = reject

      xhr.onerror = reject
    })
  }
}
