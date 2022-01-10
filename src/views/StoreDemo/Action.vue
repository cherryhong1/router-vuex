<template>
  <div>
    <h4>action</h4>
    <p>counter:{{ $store.state.counter }}</p>
    <button @click="des">-1</button>
    <button @click="increase">+1</button>
    <button @click="increaseAction({ num: 100 })">+100</button>
    <button @click="decreaseAction">setup -1</button>
    <button @click="increaseAction({num:150})">setup +150</button>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { mapActions, useStore } from "vuex";

export default {
  methods: {
    des() {
      this.$store.dispatch("decreaseAction");
    },
    increase() {
      this.$store.dispatch("increaseAction", { num: 200 });
    },
    ...mapActions(["decreaseAction", "increaseAction"]),
  },
  // mounted(){
  //   this.$store.dispatch("getBanner").then(res=>{
  //     console.log(res)
  //   })
  // },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getBanner").then((res) => {
        console.log(res);
      });
    });
    const action1 = mapActions({
      des2: "decreaseAction",
      inc: "increaseAction",
    });
    return {
      action1,
    };
  },
};
</script>

<style lang="sass" scoped></style>
