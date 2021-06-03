<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
//import AOS from 'aos'
//import 'aos/dist/aos.css'
import { mapActions } from 'vuex';

export default {
  name: 'App',

  methods: {
    ...mapActions('store', ['handleAuthStateChanged']),
  },

  mounted() {
    this.handleAuthStateChanged();
  },

  /*created() {
    AOS.init();
  }*/
}
</script>
