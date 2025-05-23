import { useSession } from "@/lib/auth-client";

const PROTECTED_ROUTES = ["/dashboard"];

export default defineNuxtRouteMiddleware(async (to) => {
  const { data: session } = await useSession(useFetch);

  if (!session.value) {
    if (PROTECTED_ROUTES.includes(to.path)) {
      return navigateTo("/");
    }
  }
});
