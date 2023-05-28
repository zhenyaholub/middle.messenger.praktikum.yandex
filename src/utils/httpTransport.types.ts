import { type OptionsWithoutMethod } from '../types/http'

export interface IHTTPTransport {
  baseUrl: string

  get: HTTPTransportMethodType

  post: HTTPTransportMethodType

  put: HTTPTransportMethodType

  patch: HTTPTransportMethodType

  delete: HTTPTransportMethodType
}

export type HTTPTransportMethodType = (
  url?: string,
  options?: OptionsWithoutMethod
) => Promise<ResponseType>

export interface ResponseType { status: number, response: any }
