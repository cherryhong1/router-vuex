import { computed } from "vue"
import { useStore } from "vuex"

export function useMapper(mapper, mapStatus){
  console.log(mapStatus)
  const store = useStore();
  const stateStoreFn = mapStatus(mapper);
  const stateStore = {};
  Object.keys(stateStoreFn).forEach((fnKey) => {
    const fn = stateStoreFn[fnKey].bind({
      $store: store,
    });
    stateStore[fnKey] = computed(fn);
  });
  return stateStore;
}