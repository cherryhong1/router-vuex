<template>
  <div>
    <h3>name:{{ $route.params.name }}</h3>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  created (){
    console.log(this.$route.params.name)
  },
  setup() {
    const route = useRoute();
    console.log(route.params.name);
  },
};
</script>

<style lang="scss" scoped></style>
