import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { config } from "./config";
import { userRoutes } from "./routes/users";

const app = new Elysia()
  .use(cors())
  // Health check route
  .get("/", () => ({ status: "ok" }))
  // User CRUD routes
  .use(userRoutes)
  .listen(config.port);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
