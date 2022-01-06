<template>
  <div>
    <h2>homeManage</h2>
    <button @click="jumpToShop">跳转到shop页面</button>
    <button @click="forward">跳到下一步</button>
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
