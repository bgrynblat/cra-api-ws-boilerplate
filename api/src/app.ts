import routes from "./routes";
import adapter from "./adapters/fastify"
import axios, { AxiosRequestConfig } from "axios";
const app = adapter(routes)

export default app