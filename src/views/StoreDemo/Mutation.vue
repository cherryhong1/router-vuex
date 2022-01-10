<template>
  <div>
    <p>{{ $store.state.counter }}</p>
    <button @click="$store.commit('decrease')">-1</button>
    <button @click="add">+10</button>
    <button @click="decrease">-1</button>
    <button @click="add_ten">常量+10</button>
    <button @click="increase_ten({ num: 100 })">+100</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { INCREASE_TEN } from "../../store/mutation-types";
export default {
  methods: {
    add() {
      this.$store.commit("increase", {
        num: 10,
      });
    },
    // ...mapMutations(["increase", INCREASE_TEN]),
    add_ten() {
      this.increase_ten({
        num: 10,
      });
    },
  },
  setup() {
    const storeMutation = mapMutations(["decrease", INCREASE_TEN]);
    return {
      ...storeMutation,
    };
  },
};
</script>

<style lang="sass" scoped></style>
