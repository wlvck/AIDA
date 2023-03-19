<template>
  <div class="tab-page">
    <div class="profile__row">
      <h4>Основная информация</h4>
      <v-row>
        <v-col
            cols="12"
            sm="3"
        >
          <v-text-field label="Фамилия"/>
        </v-col>
        <v-col
            cols="12"
            sm="3"
        >
          <v-text-field label="Имя"/>
        </v-col>
        <v-col
            cols="12"
            sm="3"
        >
          <v-text-field label="Отчество (при наличии)"/>
        </v-col>
      </v-row>
    </div>
    <div class="profile__row">
      <h4>Информация о должности</h4>
      <v-row>
        <v-col
            cols="12"
            sm="3"
        >
          <v-select :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" label="Роль"/>
        </v-col>
        <v-col
            cols="12"
            sm="3"
        >
          <v-select :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" label="Организация"/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "employeeDetailProfile"
}
</script>

<style scoped>

</style>