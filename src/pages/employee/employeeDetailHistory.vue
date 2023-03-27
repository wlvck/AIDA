<template>
  <div class="tab-page">
    <div class="d-flex align-center mt-8">
      <div class="search__input d-flex align-center mr-5">
        <icon icon-name="search"/>
        <input type="text" placeholder="Поиск по содержанию и авторам">
      </div>
      <v-btn class="filter-btn d-flex align-center" elevation="0">
        Фильтры
        <icon icon-name="arrow-bottom"/>
      </v-btn>
    </div>
    <div class="d-flex mt-6 pt-6 align-center justify-space-between">
      <h5 class="title">
        Корректировка данных в 10 февраль 2023 9:20
      </h5>
      <v-btn elevation="0" class="transparent-btn-red">Отмена</v-btn>
    </div>
    <div class="grid__block grid__block__2 mt-10">
      <div class="grid__title">Автор действия</div>
      <div class="grid__title">Автор корректировки</div>
      <div class="grid__content">Муратов Олжас Муратұлы – @12345</div>
      <div class="grid__content">УДР Алмалы – Иванов Иван</div>
    </div>
    <div class="grid__block mt-10">
      <div class="grid__title">Содержание</div>
      <div class="grid__title"></div>
      <div class="grid__content">Убийственно красивый вид на закат</div>
      <div class="grid__content d-flex flex-column align-end">
        <div class="d-flex mb-11">
          <p class="mr-4">Было:</p>
          <v-btn class="status-btn red" elevation="0">Агрессивный</v-btn>
        </div>
        <div class="d-flex">
          <p class="mr-4">Стало:</p>
          <v-btn class="status-btn green" elevation="0"> Светский</v-btn>
        </div>
      </div>
    </div>
    <div class="d-flex mt-6 pt-6 align-center justify-space-between">
      <h5 class="title">
        Комментарий сотрудника в 18 февраль 2023 11:23
      </h5>
    </div>
    <div class="grid__block grid__block__2 d-flex flex-column mt-10">
      <div class="grid__title">Пользователь</div>
      <div class="grid__content">Муратов Олжас Максатович – @12345</div>
      <div class="grid__title">Содержание</div>
      <div class="grid__content">По результам последней беседы предлагаю снять с учета</div>
    </div>
  </div>
</template>

<script setup>
import Icon from "@/components/icon.vue";
</script>

<style scoped>

</style>