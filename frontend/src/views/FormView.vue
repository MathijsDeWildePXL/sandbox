<script setup lang="ts">
import DishComponent from "@/components/DishComponent.vue";
import type {Dish} from "@/models/Dish.ts";
const dish: Dish = {
  id: 1,
  name: "Pizza",
  price: 10,
  count: 1,
  url: "https://i.ytimg.com/vi/Y8-nTw9b9e4/maxresdefault.jpg"
}
</script>

<template>
  <div>
    <DishComponent :dish="dish"></DishComponent>
  </div>
</template>

<style scoped>

</style>
