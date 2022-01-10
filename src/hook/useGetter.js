import { useMapper } from "./useMapper";
import { mapGetters } from "vuex";
export default function useGetters(mapper) {
  return useMapper(mapper, mapGetters);
}
