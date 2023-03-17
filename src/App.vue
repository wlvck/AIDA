<template>
  <div class="layout">
    <navbar/>
    <router-view v-slot="{Component, route}">
      <transition
          enter-active-class="animate__animated animate__slideInLeft"
          leave-active-class="animate__animated animate__slideOutRight"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import Navbar from "@/components/navbar.vue";
</script>
