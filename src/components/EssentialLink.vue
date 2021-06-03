<template>
  <q-item
    clickable
    :to="link"
  >
    <q-item-section
      v-if="icon"
      avatar
      class="text-info"
    >
      <q-icon :name="icon" />
    </q-item-section>

  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.q-item__section--side {
  padding: 10px;
  align-items: center;
}
</style>
