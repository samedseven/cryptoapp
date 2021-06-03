<template>
  <q-form
    @submit="submitForm"
    class="q-gutter-md"
  >
    <q-input
      filled
      type="email"
      v-model="formData.email"
      label="Adresse email"
    />

    <q-input
      filled
      type="password"
      v-model="formData.password"
      label="Mot de passe"
    />

    <div>
      <q-btn label="Connexion" type="submit" color="primary"/>
    </div>
  </q-form>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: "loginRegisterForm",

  props: ['tab'],

  data() {
    return {
      formData: {
        email: "test@gmail.com",
        password: "test123"
      }
    }
  },

  methods: {
    ...mapActions('store', ['registerUser', 'loginUser']),
    submitForm() {
      if (this.tab === 'register') {
        this.registerUser(this.formData);
      } else {
        this.loginUser(this.formData);
      }
    },
  }
}
</script>

<style scoped>

</style>
