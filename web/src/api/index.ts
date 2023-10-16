import type User from "../../../common/src/User"
import { AUTH_HEADER } from "../config"

const authHeaders = {
    [AUTH_HEADER]: "test"
}

function wrapPromise<T>(promise:Promise<T>) {
    let status = 'pending'
    let response:T
  
    const suspender = promise.then(
      (res) => {
        status = 'success'
        response = res
      },
      (err) => {
        status = 'error'
        response = err
      },
    )
    const read = () => {
        switch (status) {
          case 'pending':
            throw suspender
          case 'error':
            throw response
          default:
            return response
        }
    }
    return { read }
}

function request<T>(input: RequestInfo | URL, init?: RequestInit) {
    return wrapPromise<T>(
        fetch(input, init ? {...init, headers: {...init.headers, ...authHeaders}} : {headers: authHeaders} )
        .then((res) => res.json())
        .then((res) => res.data)
    )
}

export const whoami = () => {
    return request<User>("/api/whoami")
}

export default request