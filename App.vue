<template>
  <button @click="increment">increment</button>
  <p>item: {{ this.$store.getters.getItem(2) }}</p>
  <p>itemLength: {{ this.$store.getters.itemLength }}</p>
  <p>itemList: {{ this.$store.state.items }}</p>
  <p>counter: {{ this.$store.getters.count }}</p>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    methods: {
      async increment() {
        // this.$store.commit('increment', {
        //   num: 2,
        // });
        // this.$store.commit({
        //   type: 'increment',
        //   num: 2,
        // })
        // this.$store.dispatch('add', {
        //   num: 2,
        // });
        this.$store.dispatch({
          type: 'add',
          num: 2,
        });
        const result = await this.$store.dispatch('actionB');
        this.$store.commit('setCount', result);
        console.log('count - vue: ', this.$store.state.count);
      }
    },
  }
</script>