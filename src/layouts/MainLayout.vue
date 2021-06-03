<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title class="text-center">
          Quasar App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-primary">
      <router-view />
    </q-page-container>

    <q-footer class="fixed-bottom">
      <q-list id="menu-footer" class="bg-dark">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.icon"
          v-bind="link"
        />
      </q-list>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { mapActions } from 'vuex';

const linksData = [
  {
    icon: 'home',
    link: '/'
  },
  {
    icon: 'add',
    link: '/add-wallet'
  },
  {
    icon: 'ballot',
    link: '/'
  },
  {
    icon: 'person',
    link: '/login'
  }
];

export default {
  name: 'MainLayout',

  components: { EssentialLink },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },

  methods: {
    ...mapActions('store', ['logoutUser'])
  }
}
</script>

<style>
#menu-footer {
  display: flex;
  margin: 20px auto;
  width: fit-content;
  border-radius: 30px;
  box-shadow: 0 4px 0 #000;
}
</style>
