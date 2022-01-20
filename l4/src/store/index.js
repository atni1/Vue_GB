import Vue from 'vue';
import Vuex from 'vuex';
import Category from './modules/category';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentList: [],
    pagesList: [],
    currentPage: 1,
  },
  getters: {
    showOnPaymentDisplay: (state) => {
      let startPoint;
      if (state.currentPage === 1) {
        startPoint = 0;
      } else {
        startPoint = (state.currentPage - 1) * 4;
      }
      const endPoint = startPoint + 4;
      return state.paymentList.slice(startPoint, endPoint);
    },
    paymentList: (state) => state.paymentList,
    pagesList: (state) => state.pagesList,
    currentPage: (state) => state.currentPage,
  },
  mutations: {
    ADD_NEW_PAYMENT(state, payment) {
      state.paymentList.push(payment);
    },
    SET_PAYMENT_DATA(state, paymentList) {
      state.paymentList = paymentList;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    SET_PAGES(state, pages) {
      state.pagesList = pages;
    },
  },
  actions: {
    addNewPayment({ commit, dispatch }, payment) {
      commit('ADD_NEW_PAYMENT', payment);
      dispatch('getPage');
    },
    fetchData({ commit, dispatch }) {
      setTimeout(() => {
        const paymentList = [
          {
            id: 1, date: '20.03.2020', category: 'Food', value: 169,
          },
          {
            id: 2, date: '21.03.2020', category: 'Navigation', value: 50,
          },
          {
            id: 3, date: '22.03.2020', category: 'Sport', value: 450,
          },
          {
            id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969,
          },
          {
            id: 5, date: '24.03.2020', category: 'Education', value: 1500,
          },
          {
            id: 6, date: '25.03.2020', category: 'Food', value: 200,
          },
          {
            id: 7, date: '26.03.2020', category: 'Entertaiment', value: 669,
          },
          {
            id: 8, date: '27.03.2020', category: 'Sport', value: 500,
          },
          {
            id: 9, date: '28.03.2020', category: 'Food', value: 300,
          },
          {
            id: 10, date: '29.03.2020', category: 'Education', value: 800,
          },
          {
            id: 11, date: '30.03.2020', category: 'Sport', value: 123,
          },
          {
            id: 12, date: '31.03.2020', category: 'Food', value: 256,
          },
        ];
        commit('SET_PAYMENT_DATA', paymentList);
        dispatch('getPage');
      }, 1000);
    },
    getPage({ commit, state }) {
      // превратить validPage в массив с длинной
      const validPage = Math.ceil(state.paymentList.length / 4);
      const pagesArray = [];
      for (let i = 0; i < validPage; i += 1) {
        pagesArray.push(i + 1);
      }
      console.log(validPage);
      console.log(pagesArray);
      commit('SET_PAGES', pagesArray);
    },
  },
  modules: {
    Category,
  },
});
