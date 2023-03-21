<template>
  <div class="page">
    <div class="d-flex align-start justify-space-between">
      <h4 class="page-header">Сообщества</h4>

      <div class="d-flex flex-column">
        <v-btn class="primary-btn py-3 mb-4" elevation="0">
          Добавить
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
          <span class="pointer">Название группы <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
        <th class="text-left px-0">
          <span class="pointer">Последнее событие <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
        <th class="text-left px-5">
          <span class="pointer">Платформа <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
        <th class="text-left px-5">
          <span class="pointer">Состояние <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
        <th class="text-left px-5">
          <span class="pointer">Кол-во участников <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
        <th class="text-left">
          <span class="pointer">Участников на учете <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Клуб религиозных котов</td>
        <td>Муратов Олжас Максатович:
          Здраствуйте друзья, как у вас дела?
        </td>
        <td class="text-center">Telegram</td>
        <td class="text-center">
          <v-btn elevation="0" class="status-btn green"
                 @click="$router.push({name: 'communityDetail', params: {id: 1}})">Светский
          </v-btn>
        </td>
        <td class="text-center">2.059</td>
        <td class="text-center">68%</td>
      </tr>
      <tr>
        <td>Магжан Тобыкты</td>
        <td>Бадалов Алим Алиевич:
          Вы должны читать только ****** от автора *******
        </td>
        <td class="text-center">Telegram</td>
        <td class="text-center">
          <v-btn elevation="0" class="status-btn yellow">Традиционный</v-btn>
        </td>
        <td class="text-center">2.059</td>
        <td class="text-center">68%</td>
      </tr>
      <tr>
        <td>Нравы Саляфов</td>
        <td>Муратов Олжас Максатович:
          Здраствуйте друзья, как у вас дела?
        </td>
        <td class="text-center">Telegram</td>
        <td class="text-center">
          <v-btn elevation="0" class="status-btn red">Агрессивный</v-btn>
        </td>
        <td class="text-center">2.059</td>
        <td class="text-center">68%</td>
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