<template>
  <div class="page d-flex flex-column">
    <div class="flex-shrink-1 flex-grow-1">
      <div class="d-flex align-start justify-space-between">
        <h4 class="page-header">Калибровка</h4>
      </div>
      <div class="d-flex align-center mt-8">
        <div class="search__input d-flex align-center mr-5">
          <icon icon-name="search"/>
          <input type="text" placeholder="Поиск...">
        </div>
        <v-btn class="filter-btn d-flex align-center mr-12" elevation="0">
          Фильтры
          <icon icon-name="arrow-bottom"/>
        </v-btn>
        <v-btn class="primary-btn py-3" elevation="0">
          Подтверждено
        </v-btn>
      </div>
      <v-table class="mt-22">
        <thead>
        <tr>
          <th class="text-left">
            <span class="pointer">Автор <icon class="ml-1" icon-name="filter-arrow"/></span>
          </th>
          <th class="text-center">
            <span class="pointer">Содержание <icon class="ml-1" icon-name="filter-arrow"/></span>
          </th>
          <th class="text-center">
            <span class="pointer">Сообщество <icon class="ml-1" icon-name="filter-arrow"/></span>
          </th>
          <th class="text-left px-16">
            <span></span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Муратов Олжас Максатович</td>
          <td class="text-center">Здраствуйте друзья, как у вас дела?</td>
          <td class="text-center">SunnaPortal.com</td>
          <td class="text-center">
            <button class="mr-4">
              <icon icon-name="confirmed"/>
            </button>
            <button>
              <icon icon-name="reject"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>Бадалов Алим Алиевич</td>
          <td class="text-center">Вы должны читать только ****** от автора *******</td>
          <td class="text-center">SunnaPortal.com</td>
          <td class="text-center">
            <button class="mr-4">
              <icon icon-name="confirmed"/>
            </button>
            <button>
              <icon icon-name="reject"/>
            </button>
          </td>
        </tr>
        <tr>
          <td>Бадалов Алим Алиевич</td>
          <td class="text-center">Все плохо все ужасно, только мы это исправим!!!!!</td>
          <td class="text-center">Нравы Саляфов</td>
          <td class="text-center">
            <button class="mr-4">
              <icon icon-name="confirmed"/>
            </button>
            <button>
              <icon icon-name="reject"/>
            </button>
          </td>
        </tr>
        </tbody>
      </v-table>
    </div>
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