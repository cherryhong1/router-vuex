<template>
  <div>
    <p>modules</p>
    <p>
      {{ $store.state.user.userName }}---{{ $store.state.user.age }}---
      {{ age }}---{{ logName }}--{{ userName }}---{{ sName }}---{{}}
    </p>
    <button @click="add({ num: 100 })">+10</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import hook from "../../hook/";
const { useState, useGetters } = hook;
const { mapState, mapActions, mapMutations, mapGetters } =
  createNamespacedHelpers("user");
export default {
  computed: {
    ...mapState(["age"]),
    ...mapGetters(["logName"]),
  },
  // methods: {
  //   ...mapActions(["increase"]),
  //   ...mapMutations(["increase"]),
  // },
  setup() {
    const state1 = useState("user", ["userName"]);
    const getter1 = useGetters("user", {
      sName: "logName",
    });
    const mutation1 = mapMutations(["increase"]);
    const actions1 = mapActions({
      add: "increase",
    });
    return {
      ...state1,
      ...getter1,
      ...mutation1,
      ...actions1,
    };
  },
};
</script>

<style lang="sass" scoped></style>
