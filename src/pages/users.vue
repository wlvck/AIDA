<template>
  <div class="page">
    <div class="d-flex align-center justify-space-between">
      <h4 class="page-header">Пользователи</h4>
      <v-btn class="transparent-btn" elevation="0">
        <icon icon-name="export-icon"/>
        Экспорт Excel
      </v-btn>
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
          <span class="pointer">Ф.И.О. <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
        <th class="text-left">
          <span class="pointer">Последнее действие <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
        <th class="text-left">
          <span class="pointer">Состояние <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
        <th class="text-left">
          <span class="pointer">Комментарии от сотрудников <icon class="ml-1" icon-name="filter-arrow"/></span>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Муратов Олжас Максатович</td>
        <td>Здраствуйте друзья, как у вас дела?</td>
        <td>
          <v-btn elevation="0" class="status-btn green">Светский</v-btn>
        </td>
        <td>УДР Алмалы Иванов Иван:
          По результам последней беседы и предлагаю снять с учета
        </td>
      </tr>
      <tr>
        <td>Бадалов Алим Алиевич</td>
        <td>Здраствуйте друзья, как у вас дела?</td>
        <td>
          <v-btn elevation="0" class="status-btn yellow">Традиционный</v-btn>
        </td>
        <td>УДР Алмалы Иванов Иван:
          По результам последней беседы и предлагаю снять с учета
        </td>
      </tr>
      <tr>
        <td>Бадалова Эльвира Пашаева</td>
        <td>Здраствуйте друзья, как у вас дела?</td>
        <td>
          <v-btn elevation="0" class="status-btn red">Агрессивный</v-btn>
        </td>
        <td>УДР Алмалы Иванов Иван:
          По результам последней беседы и предлагаю снять с учета
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
            :length="15"
            :total-visible="7"
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