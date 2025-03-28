import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("gab-access-token", { path: "/" });
  cookies.delete("gab-refresh-token", { path: "/" });
  return redirect("/auth");
};