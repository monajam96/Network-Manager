<template>
  <form @submit.prevent="handleSubmit"
    class="min-w-[290px] bg-[#F6F8FA] border border-gray-200 rounded-lg p-6 flex flex-col justify-center">
    <div class="grid gap-6">
      <BaseInput id="username" type="username" label="Username or email address" v-model="username" />

      <BaseInput id="password" type="password" label="Password" hint="forget password?" v-model="password" />

      <BaseButton>
        Sign in
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { login } from '../../network/api/auth'
import BaseInput from './baseInput.vue'
import BaseButton from './baseButton.vue'

const username = ref('')
const password = ref('')

async function handleSubmit() {
  try {
    const res = await login({
      username: 'emilys',
      password: 'emilyspass',
    })

    console.log('✅ Login successful', res)
    // router.push('/dashboard')
  } catch (err) {
    console.error('❌ Login failed', err)
    alert((err as { message: string }).message)
  }
}
</script>
