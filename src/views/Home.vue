<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link
      to="/home/manage"
      active-class="why-active"
      exact-active-class="why-exact"
      >manage</router-link
    >
    |
    <router-link
      to="/home/shop"
      active-class="why-active"
      exact-active-class="why-exact"
      >shop</router-link
    >
    |
    <router-link
      to="/home/message"
      active-class="why-active"
      exact-active-class="why-exact"
      >message</router-link
    >
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive>
          <component
            :is="Component"
            :key="route.meta.usePathKey ? route.path : undefined"
          />
        </keep-alive>
      </transition>
    </router-view>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
.why-active {
  color: #42b983;
}
.why-exact {
  color: rgb(126, 153, 51);
}
</style>
