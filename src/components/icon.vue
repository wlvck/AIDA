<template>
  <component :is="iconName"/>
</template>

<script>
import logout from "@/components/icons/logout.vue";
import exportIcon from "@/components/icons/export-icon.vue"
import search from "@/components/icons/search.vue";
import arrowBottom from "@/components/icons/arrow-bottom.vue";
import filterArrow from "@/components/icons/filter-arrow.vue";
import confirmed from "@/components/icons/confirmed.vue";
import exportPdfIcon from "@/components/icons/export-pdf-icon.vue"
import reject from "@/components/icons/reject.vue";
export default {
  name: 'icon',
  props: {
    iconName: String
  },
  components: {
    logout,
    exportIcon,
    search,
    exportPdfIcon,
    arrowBottom,
    filterArrow,
    confirmed,
    reject,
  }
}
</script>

<style scoped>

</style>