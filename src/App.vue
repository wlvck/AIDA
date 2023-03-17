<template>
  <div class="layout d-flex flex-column">
    <navbar/>
    <div class="flex-shrink-1 flex-grow-1">
      <router-view v-slot="{Component, route}">
        <transition
            enter-active-class="animate__animated animate__fadeIn animate__faster"
            leave-active-class="animate__animated animate__fadeOut animate__faster"
        >
          <component :is="Component"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/navbar.vue";
</script>
