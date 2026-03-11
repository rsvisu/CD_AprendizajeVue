<script setup>
import {useFlash} from "@/composables/useFlash.js";

let {flash} = useFlash();

</script>
<template>
  <div>
    <h1>This is an about page</h1>
    <h2>Ejemplo 1:</h2>
    <div>
      <button Click Me @click="flash('Bien!', 'Estoy en la pagina about!')">Click Me</button>
    </div>
  </div>
</template>
