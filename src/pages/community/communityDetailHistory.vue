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
    <div class="mt-5 mb-16 d-flex align-center">
      <div class="date__picker mr-13">
        <div class="picker__label">Дата начала</div>
        <div class="date__block">
          <span>{{ startDate }}</span>
          <date-picker
              v-model="sDate"
              locale="ru"
              :flow="flow"
              model-type="dd.MM.yyyy"
          >
            <template #trigger>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6 1.33333C6.36819 1.33333 6.66667 1.63181 6.66667 2V2.66667H9.33333V2C9.33333 1.63181 9.63181 1.33333 10 1.33333C10.3682 1.33333 10.6667 1.63181 10.6667 2V2.66667H12.6667C13.403 2.66667 14 3.26362 14 4V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V4C2 3.26362 2.59695 2.66667 3.33333 2.66667H5.33333V2C5.33333 1.63181 5.63181 1.33333 6 1.33333ZM5.33333 4H3.33333V6H12.6667V4H10.6667V4.66667C10.6667 5.03486 10.3682 5.33333 10 5.33333C9.63181 5.33333 9.33333 5.03486 9.33333 4.66667V4H6.66667V4.66667C6.66667 5.03486 6.36819 5.33333 6 5.33333C5.63181 5.33333 5.33333 5.03486 5.33333 4.66667V4ZM12.6667 7.33333H3.33333V12.6667H12.6667V7.33333Z"
                    fill="#4685D7"/>
              </svg>
            </template>
          </date-picker>
        </div>
      </div>
      <div class="date__picker">
        <div class="picker__label">Дата окончания</div>
        <div class="date__block">
          <span>{{ endDate }}</span>
          <date-picker
              v-model="eDate"
              locale="ru"
              :flow="flow"
              model-type="dd.MM.yyyy"
          >
            <template #trigger>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6 1.33333C6.36819 1.33333 6.66667 1.63181 6.66667 2V2.66667H9.33333V2C9.33333 1.63181 9.63181 1.33333 10 1.33333C10.3682 1.33333 10.6667 1.63181 10.6667 2V2.66667H12.6667C13.403 2.66667 14 3.26362 14 4V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V4C2 3.26362 2.59695 2.66667 3.33333 2.66667H5.33333V2C5.33333 1.63181 5.63181 1.33333 6 1.33333ZM5.33333 4H3.33333V6H12.6667V4H10.6667V4.66667C10.6667 5.03486 10.3682 5.33333 10 5.33333C9.63181 5.33333 9.33333 5.03486 9.33333 4.66667V4H6.66667V4.66667C6.66667 5.03486 6.36819 5.33333 6 5.33333C5.63181 5.33333 5.33333 5.03486 5.33333 4.66667V4ZM12.6667 7.33333H3.33333V12.6667H12.6667V7.33333Z"
                    fill="#4685D7"/>
              </svg>
            </template>
          </date-picker>
        </div>
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
import {computed, ref} from "vue";

const sDate = ref()
const eDate = ref()
const flow = ['calendar']
const startDate = computed(() => {
  return sDate.value || 'ДД.ММ.ГГГГ'
})
const endDate = computed(() => {
  return eDate.value || 'ДД.ММ.ГГГГ'
})
</script>