import { METHOD, type Options, type OptionsWithoutMethod } from '../types/http'
import { queryStringify } from './helpers'

export class HTTPTransport {
  async get (url: string, options: OptionsWithoutMethod = {}) {
    return await this.request(url, { ...options, method: METHOD.GET })
  }

  async post (url: string, options: OptionsWithoutMethod = {}) {
    return await this.request(url, { ...options, method: METHOD.POST })
  }

  async put (url: string, options: OptionsWithoutMethod = {}) {
    return await this.request(url, { ...options, method: METHOD.PUT })
  }

  async patch (url: string, options: OptionsWithoutMethod = {}) {
    return await this.request(url, { ...options, method: METHOD.PATCH })
  }

  async delete (url: string, options: OptionsWithoutMethod = {}) {
    return await this.request(url, { ...options, method: METHOD.DELETE })
  }

  async request (
    url: string,
    { method = METHOD.GET, data, headers = {}, timeout = 5000 }: Options
  ) {
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      xhr.timeout = timeout

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value)
      })

      const isGetRequest = method === METHOD.GET
      const isGetRequestWithQuery = isGetRequest && data

      xhr.open(
        method,
        (isGetRequestWithQuery && `${url}${queryStringify(data)}`) || url
      )

      if (isGetRequest) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(data))
      }

      xhr.onload = () => {
        resolve(xhr)
      }
      xhr.ontimeout = reject

      xhr.onerror = reject
    })
  }
}
