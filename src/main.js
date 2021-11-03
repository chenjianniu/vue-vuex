import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from '../App.vue'

const store = createStore({
  state() {
    return {
      count: 0,
      items: [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
      ]
    }
  },
  getters: {
    itemLength: (state) => {
      return state.items.length;
    },
    getItem: (state) => (id) => {
      return state.items.filter(item => item.id === id);
    },
    count: (state) => {
      return state.count;
    }
  },
  mutations: {
    increment(state, playload) {
      if (playload && playload.num) {
        state.count += playload.num;
      } else {
        state.count ++;
      }
    },
    setCount(state, count) {
      state.count = count;
    }
  },
  actions: {
    add({ commit }, { num }) {
      commit('increment', {
        num
      });
    },
    async actionA({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(100);
        }, 5000);
      })
    },
    async actionB({ commit, dispatch }) {
      const result = await dispatch('actionA');
      console.log('result', result);
      return result;
    }
  }
})

const app = createApp(App);
app.use(store);
app.mount('#app');

console.log('count - js: ', store.state.count);
store.commit('increment');
console.log('count - js: ', store.state.count);


