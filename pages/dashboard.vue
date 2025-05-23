<script setup lang="ts">
import { signOut, useSession } from "@/lib/auth-client";

const { data: session } = await useSession(useFetch);

async function handleSignOut() {
  await signOut();
  navigateTo("/");
}
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <pre>{{ session }}</pre>
    <button @click="handleSignOut">
      Sign out
    </button>
  </div>
</template>
