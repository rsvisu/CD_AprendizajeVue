<script setup>
import TabbableTextarea from "@/components/TabbableTextarea.vue";
import {ref} from "vue";

let comment = ref("Esto es un comentario por defecto...");

</script>

<template>
  <main>
    <TabbableTextarea  v-model="comment" style="width: 100%; height: 100%; min-height: 100px; margin-top: 10px"/>
    <hr>
    <p v-text="comment"></p>
  </main>
</template>
