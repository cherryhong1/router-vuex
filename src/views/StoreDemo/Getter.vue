<template>
  <div>
    <h2>{{ $store.getters.logName }}</h2>
    <hr />
    <p>{{ logName }}-----{{ totalPrice }}</p>
    <p>{{ getName }}</p>
    <p>{{ logName }}---{{totalPrice}}</p>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { mapGetters, useStore } from "vuex";
import hook from "../../hook";
const { useGetters } = hook;
export default {
  computed: {
    ...mapGetters(["logName", "totalPrice"]),
    ...mapGetters({
      getName: "logName",
    }),
  },
  setup() {
    const store = useStore();
    const getName2 = computed(() => {
      store.getter.logName;
    });
    const getter1 = useGetters(["logName", "totalPrice"]);
    return {
      getName2,
      getter1,
    };
  },
};
</script>

<style lang="sass" scoped></style>
