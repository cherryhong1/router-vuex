<template>
  <div>
    <h2>homeShop</h2>
    <p>{{ $route.query.height }}---{{ $route.query.age }}</p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    console.log(route.query.height, route.query.age);
  },
};
</script>

<style scoped></style>
