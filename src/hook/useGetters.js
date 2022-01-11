import { useMapper } from "./useMapper";
import { mapGetters, createNamespacedHelpers } from "vuex";
export function useGetters(modulesName, mapper) {
  console.log(mapper)
  let mapFn = mapGetters;
  if (typeof modulesName === "string" && modulesName.length > 0) {
    mapFn = createNamespacedHelpers(modulesName).mapGetters;
  };
  return useMapper(mapper, mapFn);
};
