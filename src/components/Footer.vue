<template>
  <footer class="w-full text-xs text-white px-4 flex items-center justify-between">
      <div class="flex flex-col md:flex-row gap-1 md:gap-2 md:gap-3">
        <a href="#" class="hover:text-gray-400">Home</a>
        <a href="#" class="hover:text-gray-400">About</a>
        <a href="#" class="hover:text-gray-400">Services</a>
        <a href="#" class="hover:text-gray-400">Contact</a>
      </div>
      <div class="text-center md:text-right">
        <p>&copy; 2024 MyCompany. All rights reserved</p>
      </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>
