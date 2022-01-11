import { computed } from "vue";
import { useStore } from "vuex";

export function useMapper(mapper, mapStatus) {
  const store = useStore();
  const stateStoreFn = mapStatus(mapper);
  const stateStore = {};
  Object.keys(stateStoreFn).forEach((fnKey) => {
    const fn = stateStoreFn[fnKey].bind({
      $store: store,
    });
    stateStore[fnKey] = computed(fn);
  });
  console.log(stateStore)
  return stateStore;
}
