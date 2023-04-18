import { METHOD, Options, OptionsWithoutMethod } from "../types/http";
import { queryStringify } from "./helpers";

export class HTTPTransport {
  get(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.GET });
  }

  post(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.POST });
  }

  put(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.PUT });
  }

  patch(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.PATCH });
  }

  delete(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.DELETE });
  }

  request(
    url: string,
    { method = METHOD.GET, data, headers = {}, timeout = 5000 }: Options
  ) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.timeout = timeout;

      Object.entries(headers).forEach(([key, value]) =>
        xhr.setRequestHeader(key, value as string)
      );

      const isGetRequest = method === METHOD.GET;
      const isGetRequestWithQuery = isGetRequest && data;

      xhr.open(
        method,
        (isGetRequestWithQuery && `${url}${queryStringify(data)}`) || url
      );

      if (isGetRequest) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }

      xhr.onload = () => resolve(xhr);
      xhr.ontimeout = reject;
      xhr.onerror = reject;
    }) as Promise<XMLHttpRequest>;
  }
}
