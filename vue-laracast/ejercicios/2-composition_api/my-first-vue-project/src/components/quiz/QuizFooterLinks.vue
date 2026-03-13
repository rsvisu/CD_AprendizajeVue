<script setup>

import {inject} from "vue";

// Inject: para obtener el valor del provide del padre
let quiz = inject('quiz');

</script>

<template>

  <p>{{ quiz.name }}</p>
  <ul>
    <li>Link 1</li>
    <li>Link 2</li>
    <li>Link 3</li>
  </ul>

</template>

<style scoped>

</style>
