<template>
  <div class="layout d-flex flex-column">
    <navbar/>
    <div class="flex-shrink-1 flex-grow-1">
      <router-view v-slot="{Component, route}">
        <component :is="Component"/>
      </router-view>
    </div>

  </div>
</template>

<script setup>
import Navbar from "@/components/navbar.vue";
</script>
