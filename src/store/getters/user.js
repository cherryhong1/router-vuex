const state = () => ({
  userName: "缓缓",
  age: 18,
});
const getters = {
  logName: (state) => {
    return `姓名${state.userName}`;
  },
};
const actions = {
  increase({ commit }, payload) {
    commit("increase", payload);
  },
};
const mutations = {
  increase(state, payload) {
    state.age += payload.num;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
