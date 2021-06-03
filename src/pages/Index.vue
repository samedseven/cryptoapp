<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <img
      alt="Quasar logo"
      src="~assets/icons/btc.svg"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data() {
    return {
      allCryptos: null,
    }
  },

  methods: {
    async getCryptos() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const resp = await fetch("https://api.coincap.io/v2/assets", requestOptions)
      const result = await resp.json()
      this.allCryptos = result.data;
    }
  },

  mounted() {
    this.getCryptos();
  }
}
</script>
