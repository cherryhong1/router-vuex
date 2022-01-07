import { useStore, mapState } from "vuex";
import { computed } from "vue";
export function useState(mapper) {
  const store = useStore();
  const stateStoreFn = mapState(mapper);
  const stateStore = {};
  Object.keys(stateStoreFn).forEach((fnKey) => {
    const fn = stateStoreFn[fnKey].bind({
      $store: store,
    });
    stateStore[fnKey] = computed(fn);
  });
  return stateStore;
}
