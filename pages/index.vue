<script setup lang="ts">
import { signIn, signOut, useSession } from "@/lib/auth-client";

const session = useSession();
</script>

<template>
  <div>
    <button
      v-if="!session?.data" @click="() => signIn.social({
        provider: 'github',
      })"
    >
      Continue with GitHub
    </button>
    <div>
      <pre>{{ session.data }}</pre>
      <button v-if="session.data" @click="signOut()">
        Sign out
      </button>
    </div>
  </div>
</template>
