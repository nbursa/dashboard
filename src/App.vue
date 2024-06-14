<template>
  <div class="h-screen w-screen overflow-hidden grid md:grid-rows-[auto_1fr_auto]">
    <!-- Top navigation -->
    <div class="flex items-center justify-center h-14">
      <nav class="px-6 py-2 my-2 inline-flex items-center justify-center gap-4 rounded-full bg-white/10">
        <router-link to="/">Weather</router-link>
        <router-link to="/todos">To-Do List</router-link>
        <router-link to="/calendar">Calendar</router-link>
        <router-link to="/news">News Feed</router-link>
      </nav>
    </div>

    <router-view class="relative h-full"></router-view>

    <!-- Bottom navigation -->
    <div class="flex items-center justify-center py-4 h-14">
      Bottom
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
