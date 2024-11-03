<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import { ref } from 'vue'
import requestHandler from '@/utilities/requestHandler';

const username = ref<string>('')
const password = ref<string>('')

async function handleLogin() {
    await requestHandler({
        url: 'api/auth/login/',
        method: 'post',
        body: {
            username: username.value,
            password: password.value
        }
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

</script>

<template>
    <AuthLayout>
        <form @submit.prevent="handleLogin">
            <label for="username">
                Username
                <input type="text" id="username" v-model="username" class="border w-full p-2" required>
            </label>

            <label for="password" class="mt-4">
                Password
                <input type="password" id="password" v-model="password" class="border w-full p-2" required>
            </label>

            <button class="bg-primary w-full p-2 text-white rounded mt-4" type="submit">Login</button>
        </form>

    </AuthLayout>
</template>