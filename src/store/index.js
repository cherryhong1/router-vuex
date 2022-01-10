import { createStore } from "vuex";

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
  },
  mutations: {},
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
  actions: {},
  modules: {},
});
