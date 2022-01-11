import { mapState, createNamespacedHelpers } from "vuex";
import { useMapper } from "./useMapper";
export function useState(modulesName, mapper) {
  let mapFn = mapState;
  if (typeof modulesName === "string" && modulesName.length > 0) {
    mapFn = createNamespacedHelpers(modulesName).mapState;
  };
  return useMapper(mapper, mapFn);
}
