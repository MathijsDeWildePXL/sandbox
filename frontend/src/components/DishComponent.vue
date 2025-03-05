<script setup lang="ts">
  import type {Dish} from "@/models/Dish";
  import {computed} from "vue";

  defineProps<{
    dish: Dish
  }>()
</script>

<template>
  <div>
    <img :src=dish.url alt="Dish image">
    <h1>{{ dish.name }}</h1>
    <p>{{ dish.price }}</p>
    <p>{{ dish.count }}</p>
  </div>
</template>

<style scoped>

</style>
