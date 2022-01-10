import { computed } from "vue";
import { useStore, mapGetters } from "vuex";
export function useGetters(mapper) {
  const store = useStore();
  const getterStoreFn = mapGetters(mapper);
  const getterStore = {};
  Object.keys(getterStoreFn).forEach((fnKey) => {
    const fn = getterStoreFn[fnKey].bind({
      $store: store,
    });
    getterStore[fnKey] = computed(fn);
  });
  return getterStore;
}
