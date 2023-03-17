<template>
  <component :is="iconName"/>
</template>

<script>
import logout from "@/components/icons/logout.vue";
import exportIcon from "@/components/icons/export-icon.vue"
import search from "@/components/icons/search.vue";
import arrowBottom from "@/components/icons/arrow-bottom.vue";
import filterArrow from "@/components/icons/filter-arrow.vue";
export default {
  name: 'icon',
  props: {
    iconName: String
  },
  components: {
    logout,
    exportIcon,
    search,
    arrowBottom,
    filterArrow,
  }
}
</script>

<style scoped>

</style>