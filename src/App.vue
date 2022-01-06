<template>
  <div id="nav">
    <router-link to="/" replace active-class="why-active">Home</router-link> |
    <router-link to="/home" replace active-class="why-active">Home</router-link>
    |
    <router-link to="/about" replace active-class="why-active"
      >About</router-link
    >
    |
    <router-link to="/user/kobe" active-class="why-active">用户</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .why-active {
    color: #42b983;
  }
}
</style>
