<template>
  <nav class="px-6 py-2 my-2 inline-flex items-center justify-center gap-4 rounded-full bg-white/10">
    <router-link to="/" class="hover:scale-110 transition duration-200">Weather</router-link>
    <router-link to="/todos" class="hover:scale-110 transition duration-200">To-Do List</router-link>
    <router-link to="/calendar" class="hover:scale-110 transition duration-200">Calendar</router-link>
    <router-link to="/news" class="hover:scale-110 transition duration-200">News Feed</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navigation',
});
</script>