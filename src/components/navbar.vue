<template>
  <div class="navbar__container">
    <div class="navbar d-flex align-center justify-space-between">
      <div class="navbar__logo">
        AI<span>DA</span>
      </div>
      <div class="navbar__links d-flex align-center">
        <router-link to="/statistics">
          Статистика
        </router-link>
        <router-link to="/users">
          Пользователи
        </router-link>
        <router-link to="/communities">
          Сообщества
        </router-link>
        <router-link to="/employees">
          Сотрудники
        </router-link>
        <router-link to="/calibration">
          Калибровка
        </router-link>
      </div>
      <div class="d-flex align-center">
        <div class="navbar__profile d-flex align-center">
          <img src="@/assets/profile.png" alt="">
          <h3>Admin</h3>
        </div>
        <div class="navbar__logout">
          <icon icon-name="logout"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icon.vue";

export default {
  name: "navbar",
  components: {Icon}
}
</script>

<style scoped>

</style>