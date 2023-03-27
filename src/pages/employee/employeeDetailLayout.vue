<template>
  <div class="page pt-4">
    <v-breadcrumbs class="mb-5 px-0" :items="['Сотрудник', 'Адиев Максат Кожанұлы']"></v-breadcrumbs>
    <div class="d-flex align-start justify-space-between">
      <h4 class="page-header">Адиев Максат Кожанұлы</h4>

      <div class="d-flex align-center mb-8">
        <a class="d-block mr-7 show-login-credentials text-decoration-none" href="">Показать логин и пароль </a>
        <div class="d-flex flex-column">
          <v-btn class="primary-btn btn-width" elevation="0">
            Сохранить
          </v-btn>
        </div>
      </div>
    </div>
    <div class="d-flex justify-space-between align-start">
      <div class="grid__block">
        <div class="grid__title">Последний вход</div>
        <div class="grid__title">Последнее действие</div>
        <div class="grid__content">02.03.2023 19:52</div>
        <div class="grid__content">02.03.2023 19:55</div>
      </div>
      <v-btn class="transparent-btn btn-width" elevation="0">
        Экспорт Excel
      </v-btn>
    </div>
    <div class="tab__link">
      <router-link active-class="active-tab" :to="{name: 'employeeDetailProfile'}">Профиль</router-link>
      <router-link active-class="active-tab" :to="{name: 'employeeDetailHistory'}">История действий</router-link>
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