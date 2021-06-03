<template>
  <q-page class="flex flex-center">
    <q-card style="width: 600px;">
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="register" label="Inscription" />
        <q-tab name="login" label="Connexion" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated class="q-pa-lg">
        <q-tab-panel name="register">
          <div class="text-h6 q-mb-lg">Inscription</div>
          <login-register-form :tab="tab"/>
        </q-tab-panel>

        <q-tab-panel name="login">
          <div class="text-h6 q-mb-lg">Connexion</div>
          <login-register-form :tab="tab"/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>

  </q-page>
</template>

<script>

import LoginRegisterForm from "components/loginRegisterForm";

export default {
  name: "pageAuth",
  components: {LoginRegisterForm},
  data() {
    return {
      tab: 'login'
    }
  }
}
</script>

<style scoped>

</style>
