<template>
  <div class="page pt-4">
    <v-breadcrumbs class="mb-5 px-0" :items="['Сообщества', 'Клуб религиозных котов']"></v-breadcrumbs>
    <div class="d-flex align-start justify-space-between">
      <h4 class="page-header">Клуб религиозных котов</h4>
      <v-btn class="transparent-btn btn-width" elevation="0">
        <icon icon-name="export-icon"/>
        Экспорт PDF
      </v-btn>
    </div>
    <div class="tab__link">
      <router-link active-class="active-tab" :to="{name: 'communityDetailProfile'}">Профиль</router-link>
      <router-link active-class="active-tab" :to="{name: 'communityDetailHistory'}">История изменений</router-link>
    </div>
    <router-view v-slot="{Component, route}">
      <component :is="Component"/>
    </router-view>
  </div>
</template>

<script setup>
import Icon from "@/components/icon.vue";
</script>

<style scoped>

</style>