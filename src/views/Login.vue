<template>
  <div>
    <button @click="loginBtn">登录</button>
  </div>
</template>

<script>
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const loginBtn = () => {
      window.localStorage.setItem("token", "code");
      router.push({
        path: "/",
      });
    };
    onBeforeRouteLeave((to, from) => {
      console.log('onBeforeRouteLeave')
      console.log(to, from)
    })
    onBeforeRouteUpdate(async(to, from) => {
      console.log("onBeforeRouteUpdate")
      console.log(to, from)
    })
    return {
      loginBtn,
    };
  },

};
</script>

<style lang="sass" scoped></style>
