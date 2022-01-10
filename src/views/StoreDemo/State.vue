<template>
  <div>
    <h2>state的使用</h2>
    <p>
      {{ counter }}---{{age}}
      <!-- {{ sCounter }}---{{ $store.state.counter }}---{{ name }} ---{{
        counter
      }}---{{ age }}--{{ sName }}---{{ sAge }} -->
    </p>
  </div>
</template>

<script>
// import { computed } from "@vue/reactivity";
// import { mapState, useStore } from "vuex";
import hook from '../../hook'
console.log(hook)
export default {
  // computed: {
  //   ...mapState({
  //     sName: (state) => {
  //       return state.counter;
  //     },
  //     sAge: (state) =>{
  //       return state.age
  //     }
  //   }),
  //   ...mapState(["name", "counter", "age"]),
  //   sCounter: (state) => {
  //     return state.counter;
  //   },
  // },
  setup() {
    // const store = useStore();
    // const mapStateFn = mapState(["counter", "age", "name"]);
    // const stateStore = {};
    // Object.keys(mapStateFn).forEach((fnKey) => {
    //   const fn = mapStateFn[fnKey].bind({ $store: store });
    //   stateStore[fnKey] = computed(fn);
    // });
    // return {
    //   ...stateStore,
    // };
    const state1 = hook.useState(["counter", "age", "name"])
    return {
      ...state1
    }
  },
};
</script>

<style lang="sass" scoped></style>
