<template>
  <component :is="iconName"/>
</template>

<script>
import logout from "@/components/icons/logout.vue";
import exportIcon from "@/components/icons/export-icon.vue"

export default {
  name: 'icon',
  props: {
    iconName: String
  },
  components: {
    logout,
    exportIcon
  }
}
</script>

<style scoped>

</style>