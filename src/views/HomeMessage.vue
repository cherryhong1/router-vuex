<template>
  <div>
    <h2>homeMessage</h2>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const jumpToShop = () => {
      // router.push("/home/shop");
      router.push({
        path: "/home/shop",
        query: {
          height: 1.8,
          age: 18,
        },
      });
    };
    const forward = ()=>{
      console.log('forward')
      // router.go(1)
      // router.forward()
      router.back()
    }
    return {
      jumpToShop,
      forward
    };
  },
};
</script>

<style scoped></style>
