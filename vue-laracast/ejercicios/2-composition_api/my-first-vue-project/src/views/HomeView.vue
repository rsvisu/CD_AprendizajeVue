<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {ref} from "vue";
import {useFlash} from "@/composables/useFlash.js";

// Ej 1:
let message = ref("Hola Mundo!");

setTimeout(() => {
  message.value = "Cambiado";
}, 2000);

// Ej 2:
let {flash} = useFlash();

</script>

<template>
  <main>
    <!--<TheWelcome/>-->
    <h1>Home</h1>
    <h2>Ejemplo 1:</h2>
    <div>
      <p>{{ message }}</p>
      <input v-model="message" type="text">
    </div>

    <h2>Ejemplo 2:</h2>
    <div>
      <button @click="flash('Muy bien!', 'Estoy en la pagina de inicio!', 'info')">Click Me</button>
    </div>
  </main>

</template>
