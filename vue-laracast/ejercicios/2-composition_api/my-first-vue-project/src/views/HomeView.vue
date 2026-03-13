<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <!--<TheWelcome/>-->
    <h2>Ejemplos:</h2>
    <ul>
      <li><RouterLink to="/examples/page1">Pagina 1</RouterLink></li>
      <li><RouterLink to="/examples/page2">Pagina 2</RouterLink></li>
      <li><RouterLink to="/examples/page3">Pagina 3</RouterLink></li>
      <li><RouterLink to="/examples/page4">Pagina 4</RouterLink></li>
    </ul>
    <h2>Cuestionario:</h2>
    <RouterLink to="/examples/quiz">Cuestionario</RouterLink>
  </main>

</template>
