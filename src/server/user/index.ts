import { decrypt } from "@/lib/jwt";
import { serverEnv } from "@/utils/env/server";
import { Elysia, InternalServerError } from "elysia";
import { cookies } from "next/headers";

export const userRoute = new Elysia({ prefix: "/user" }).get(
  "/me",
  async (ctx) => {
    const user = await decrypt(
      (await cookies()).get(serverEnv.AUTH_COOKIE)?.value,
    );

    if (!user) throw new InternalServerError("User not found");

    return user;
  },
);
