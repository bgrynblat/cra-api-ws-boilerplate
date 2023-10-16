export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4004
export const LOGGING = process.env.LOGGING ? process.env.LOGGING === "true" : true

export const AUTH_HEADER = process.env.AUTH_HEADER || "X-APP-APIKEY"
export const AUTH_COOKIE = process.env.AUTH_COOKIE || "X-APP-AUTH"
export const AUTH_SKIP = process.env.AUTH_SKIP === "true"
export const AUTH_HEADER_REFRESH = process.env.AUTH_HEADER_REFRESH || "X-APP-REFRESH"

export const CORS_ALLOWED_ORIGINS = process.env.CORS_ALLOWED_ORIGINS ? process.env.CORS_ALLOWED_ORIGINS.split(",") : ["*"]
export const CORS_ALLOWED_HEADERS = process.env.CORS_ALLOWED_HEADERS ? process.env.CORS_ALLOWED_HEADERS.split(",") : ["Content-Type", "Authorization", "customer", AUTH_HEADER]
export const CORS_ALLOWED_METHODS = process.env.CORS_ALLOWED_METHODS ? process.env.CORS_ALLOWED_METHODS.split(",") : ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]

export const WEB_SERVER = process.env.WEB_SERVER || "http://127.0.0.1:3000"