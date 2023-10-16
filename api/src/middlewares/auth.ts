import {
    AUTH_COOKIE,
    AUTH_HEADER,
    AUTH_HEADER_REFRESH,
    AUTH_SKIP
} from "../config";
import { BMiddleware } from "../types";

let skip:boolean = AUTH_SKIP

export const setSkipAuth = (skipAuth:boolean) => {
    skip = skipAuth
}

export const getSkipAuth = () => skip

const auth:BMiddleware = async (req, res) => {
    if(skip) return
    const apikey = req.headers[AUTH_HEADER.toLowerCase()]
    const cookie = req.cookies[AUTH_COOKIE.toLowerCase()]
    if(!apikey && !cookie)
        return {code: 401, message: "Unauthorized"}

    try {
        // Implement logic
        const user = apikey === "test" ? "test" : null
        if(!user)
            return {code: 401, message: "Unauthorized"}

        req.user = {id: "test", name: "test", email: "test@yopmail.com"}
    } catch(err:any) {
        return {code: 500, message: err.message}
    }
}

export default auth