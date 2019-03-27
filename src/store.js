import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    cart: [],
  },
  mutations: {
    loadSuccess(state, payload = []) {
      state.items = [...state.items, ...payload];
    },
    addToCart(state, item = {}) {
      state.cart = [...state.cart, item];
    },
    removeFromCart(state, item = {}) {
      state.cart = [
        ...state.cart.filter((product) => product.name !== item.name),
      ];
    },
  },
  actions: {
    loadItems({ commit }, items) {
      commit('loadSuccess', items);
    },
    addToCart({ commit }, item) {
      commit('addToCart', item);
    },
    removeFromCart({ commit }, item) {
      commit('removeFromCart', item);
    },
  },
});
