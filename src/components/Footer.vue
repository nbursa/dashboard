<template>
  <footer class="w-full text-xs text-white px-4 flex items-center justify-between">
      <div class="flex flex-col md:flex-row gap-1 md:gap-2 md:gap-3">
        <RouterLink to="/" class="hover:text-gray-400">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-gray-400">About</RouterLink>
        <RouterLink to="/services" class="hover:text-gray-400">Services</RouterLink>
        <RouterLink to="/contact" class="hover:text-gray-400">Contact</RouterLink>
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
