<template>
  <div>
    <div class="d-flex align-center mt-8">
      <div class="search__input d-flex align-center mr-5">
        <icon icon-name="search"/>
        <input type="text" placeholder="Поиск по содержанию и авторам...">
      </div>
      <v-btn class="filter-btn d-flex align-center" elevation="0">
        Фильтры
        <icon icon-name="arrow-bottom"/>
      </v-btn>
    </div>
    <div class="mt-7 d-flex align-center">
      <div class="checkbox__block mr-6">
        <input id="1" type="checkbox" checked>
        <label for="1">Действие пользователей</label>
      </div>
      <div class="checkbox__block mr-6">
        <input id="2" type="checkbox">
        <label for="2">Корректировки</label>
      </div>
      <div class="select__width">
        <v-select :items="['Светский', 'Агрессивный', 'Традиционный']" label="Состояние"/>
      </div>
    </div>
    <div class="content__body">
      <div class="content__container">
        <div class="d-flex mt-6 pt-6 align-center justify-space-between">
          <h2 class="h2">
            Корректировка данных в 10 февраль 2023 9:20
          </h2>
        </div>
        <div class="d-flex align-center justify-space-between">
          <div class="grid__block grid__block__2 d-flex flex-column mt-10">
            <div class="grid__title">Автор действия</div>
            <div class="grid__content">Муратов Олжас Максатович – @12345</div>
            <div class="grid__title">Содержание</div>
            <div class="grid__content">Убийственно красивый вид на закат</div>
          </div>
          <div class="d-flex flex-column align-end">
            <div class="mb-4">
              <p class="mr-4 d-inline-block">Итог:</p>
              <v-btn class="status-btn green ml-3" elevation="0"> Светский</v-btn>
            </div>
            <v-btn class="status-btn transparent-btn" elevation="0">Корректировка</v-btn>
          </div>
        </div>
      </div>
      <div class="content__container">
        <div class="d-flex mt-6 pt-6 align-center justify-space-between">
          <h2 class="h2">
            Корректировка данных в 10 февраль 2023 9:20
          </h2>
        </div>
        <div class="d-flex align-center justify-space-between">
          <div class="grid__block grid__block__2 d-flex flex-column mt-10">
            <div class="grid__title">Автор действия</div>
            <div class="grid__content">Муратов Олжас Максатович – @12345</div>
            <div class="grid__title">Содержание</div>
            <div class="grid__content">Убийственно красивый вид на закат</div>
          </div>
          <div class="d-flex flex-column align-end">
            <div class="grid__block mb-9 grid__block__1 mt-10">
              <div class="grid__title">Автор корректировки</div>
              <div class="grid__title"></div>
              <div class="grid__content">УДР Алмалы – Иванов Иван</div>
            </div>
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
        </div>
      </div>
      <div class="content__container">
        <div class="d-flex mt-6 pt-6 align-center justify-space-between">
          <h2 class="h2">
            Корректировка данных в 10 февраль 2023 9:20
          </h2>
        </div>
        <div class="d-flex align-center justify-space-between">
          <div class="grid__block grid__block__2 d-flex flex-column mt-10">
            <div class="grid__title">Автор действия</div>
            <div class="grid__content">Муратов Олжас Максатович – @12345</div>
            <div class="grid__title">Содержание</div>
            <div class="grid__content">Убийственно красивый вид на закат</div>
          </div>
          <div class="d-flex flex-column align-end">
            <div class="mb-4">
              <p class="mr-4 d-inline-block">Итог:</p>
              <v-btn class="status-btn red" elevation="0">  Агрессивный</v-btn>
            </div>
            <v-btn class="status-btn transparent-btn" elevation="0">Корректировка</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Icon from "@/components/icon.vue";
import {ref} from "vue";

const ex1 = ref()
</script>