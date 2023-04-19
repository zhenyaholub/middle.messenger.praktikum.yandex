export enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface Options {
  method: METHOD
  timeout?: number
  headers?: Record<string, string>
  data?: any
}

export type OptionsWithoutMethod = Omit<Options, 'method'>
