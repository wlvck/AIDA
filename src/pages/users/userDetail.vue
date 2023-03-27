<template>
  <div class="page pt-4">
    <v-breadcrumbs class="mb-5 px-0" :items="['Пользователи', 'Муратов Олжас Муратұлы']"></v-breadcrumbs>
    <div class="d-flex align-start justify-space-between">
      <h4 class="page-header">Муратов Олжас Муратұлы</h4>
      <div class="d-flex align-center">
        <v-btn elevation="0" class="btn-width primary-btn mr-4">Комментировать</v-btn>
        <v-btn class="transparent-btn btn-width" elevation="0">
          <icon icon-name="export-icon"/>
          Экспорт PDF
        </v-btn>
      </div>
    </div>
    <div class="tab__link">
      <router-link active-class="active-tab" :to="{name: 'userDetailProfile'}">Профиль</router-link>
      <router-link active-class="active-tab" :to="{name: 'userDetailHistory'}">История изменений</router-link>
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