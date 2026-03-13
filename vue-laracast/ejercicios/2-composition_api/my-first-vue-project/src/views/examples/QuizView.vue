<script setup>
import Quiz from "@/components/quiz/Quiz.vue";
import {state} from "@/stores/quizStore.js";
</script>

<template>
  <main>
    <Quiz :quiz="state"/>
  </main>
</template>

<style scoped>

</style>
