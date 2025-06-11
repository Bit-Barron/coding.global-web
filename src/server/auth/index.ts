import { encrypt } from "@/lib/jwt";
import { drizzle } from "@/lib/drizzle";
import { authenticationSchema } from "@/lib/typebox/auth";
import { serverEnv } from "@/utils/env/server";
import { Elysia, InternalServerError } from "elysia";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export const authRoute = new Elysia({ prefix: "/auth" })
  .post("/register", async (ctx) => {})
  .get("/logout", async (ctx) => {
    (await cookies()).delete(serverEnv.AUTH_COOKIE);
  });
