import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(
      window.localStorage.getItem("user") |
        "[{userName:'admin',password:123},{userName:'xiaoming',password:123}]"
    )
  },
  mutations: {},
  actions: {},
  modules: {}
});
