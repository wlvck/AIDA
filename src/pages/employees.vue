<template>
  <div class="page">
    <div class="d-flex align-start justify-space-between">
      <h4 class="page-header">Сотрудники</h4>

      <div class="d-flex flex-column">
        <v-btn class="primary-btn py-3 mb-4" elevation="0">
          Создать
        </v-btn>
        <v-btn class="transparent-btn" elevation="0">
          <icon icon-name="export-icon"/>
          Экспорт Excel
        </v-btn>
      </div>
    </div>
    <div class="d-flex align-center mt-8">
      <div class="search__input d-flex align-center mr-5">
        <icon icon-name="search"/>
        <input type="text" placeholder="Поиск...">
      </div>
      <v-btn class="filter-btn d-flex align-center" elevation="0">
        Фильтры
        <icon icon-name="arrow-bottom"/>
      </v-btn>
    </div>
    <v-table class="mt-22">
      <thead>
      <tr>
        <th class="text-left">
          <span class="pointer">ФИО <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
        <th class="text-center">
          <span class="pointer">Роль <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
        <th class="text-center">
          <span class="pointer">Организация <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
        <th class="text-left px-5">
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Администратор</td>
        <td class="text-center">Администратор</td>
        <td class="text-center">Администратор</td>
        <td></td>
      </tr>
      <tr>
        <td>Иванов Иван</td>
        <td class="text-center">Теолог</td>
        <td class="text-center">УДР</td>
        <td class="text-center">
          <v-btn elevation="0" class="transparent-btn">Логин и пароль</v-btn>
        </td>
      </tr>
      <tr>
        <td>Ахметов Мыктыбек</td>
        <td class="text-center">Просмотр</td>
        <td class="text-center">Акимат – Алматы</td>
        <td class="text-center">
          <v-btn elevation="0" class="transparent-btn">Логин и пароль</v-btn>
        </td>
      </tr>
      </tbody>
    </v-table>
    <div class="pagination__block d-flex align-center justify-space-between">
      <div class="pagination__content">
        Показано 1-100 из 2879 записей
      </div>
      <div class="text-center">
        <v-pagination
            :length="35"
            :total-visible="6"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icon.vue";

export default {
  name: "users",
  components: {Icon}
}
</script>

<style scoped>

</style>