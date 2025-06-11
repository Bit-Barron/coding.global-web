import { encrypt } from "@/lib/jwt";
import { drizzle } from "@/lib/drizzle";
import { authenticationSchema } from "@/lib/typebox/auth";
import { serverEnv } from "@/utils/env/server";
import { Elysia } from "elysia";
import { cookies } from "next/headers";

export const authRoute = new Elysia({ prefix: "/auth" })
  .post("/register", async (ctx) => {})
  .get("/logout", async (ctx) => {
    (await cookies()).delete(serverEnv.AUTH_COOKIE);
  });
