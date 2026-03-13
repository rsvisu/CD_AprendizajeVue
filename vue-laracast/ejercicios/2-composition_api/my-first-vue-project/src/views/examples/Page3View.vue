<script setup>

import {useStorage} from "@/composables/useStorage.js";

let food = useStorage('food');

</script>

<template>
  <main>
    <h2>Ejemplo 1:</h2>
    <div>
      <p>¿Cual es tu comida favorita?</p>
      <input type="text" v-model="food">
    </div>
  </main>
</template>
