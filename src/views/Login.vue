  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const email = ref('');
  const password = ref('');
  
  const handleLogin = () => {
    if (email.value && password.value) {
      router.push('/dashboard');
    }
  };
  </script>
<template>
  <div class="min-h-screen bg-gradient-to-br from-soft-green via-green-50 to-vibrant-green/20 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
      <div class="flex justify-center mb-6">
        <i class="fa-solid fa-cubes text-5xl text-vibrant-green"></i>
      </div>

      <div class="text-center mb-8">
        <h1 class="text-2xl font-semibold text-gray-900 mb-2">Bem-vindo de volta</h1>
        <p class="text-solid-black/70 text-sm">Entre na sua conta para continuar</p>
      </div>

      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
          <input id="email" type="email" v-model="email" placeholder="seu@email.com" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vibrant-green focus:border-transparent transition-all duration-200 text-solid-black placeholder-gray-400" />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Senha</label>
          <input id="password" type="password" v-model="password" placeholder="••••••••" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-vibrant-green focus:border-transparent transition-all duration-200 text-solid-black placeholder-gray-400" />
        </div>

        <button type="submit" class="w-full bg-vibrant-green hover:bg-vibrant-green/90 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-vibrant-green focus:ring-offset-2">
          Entrar
        </button>
      </form>

      <div class="text-center mt-6">
        <p class="text-sm text-gray-600">
          Não tem uma conta? 
          <button class="text-vibrant-green hover:text-vibrant-green/80 font-medium transition-colors duration-200">
            Cadastre-se
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
