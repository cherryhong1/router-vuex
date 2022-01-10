import { createStore } from "vuex";
import { INCREASE_TEN } from "./mutation-types";
import axios from "axios";
import { Promise } from "core-js";

export default createStore({
  state: {
    name: "lili",
    counter: 1,
    age: 18,
    bookList: [
      {
        name: "vue",
        price: 12,
        count: 3,
      },
      {
        name: "react",
        price: 15,
        count: 6,
      },
      {
        name: "angular",
        price: 20,
        count: 8,
      },
    ],
    banner: [],
  },
  mutations: {
    increase(state, payload) {
      state.counter += payload.num;
    },
    decrease(state) {
      state.counter--;
    },
    [INCREASE_TEN](state, payLoad) {
      state.counter += payLoad.num;
    },
    getBanner(state, payload) {
      state.banner = payload;
    },
  },
  getters: {
    logName: (state) => {
      return `姓名${state.name}`;
    },
    totalPrice: (state) => {
      let total = 0;
      state.bookList.forEach((item) => {
        total += item.price * item.count;
      });
      return total;
    },
  },
  actions: {
    increaseAction(context, payload) {
      console.log(context);
      context.commit("increase", payload);
    },
    decreaseAction({ commit }) {
      commit("decrease");
    },
    getBanner({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://123.207.32.32:8000/home/multidata")
          .then((res) => {
            console.log(res);
            commit("getBanner", res.data.data.banner.list);
            resolve("haha");
          })
          .catch((res) => {
            reject(res);
            console.log(res);
          });
      });
    },
    [INCREASE_TEN]({ commit }, payload) {
      commit(INCREASE_TEN, payload);
    },
  },
  modules: {},
});
