<script setup>

import {provide} from "vue";
import QuizFooter from "@/components/quiz/QuizFooter.vue";

// Props
let props = defineProps({
  quiz: Object
})

// Provide: para dar a los hijos la llave quiz con el valor quiz del prop
provide('quiz', props.quiz);

</script>

<template>

  <QuizFooter/>

</template>

<style scoped>

</style>
