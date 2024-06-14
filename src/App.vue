<template>
  <div class="h-screen w-screen overflow-hidden grid md:grid-rows-[auto_1fr_auto]">
    <!-- Top navigation -->
    <div class="flex items-center justify-center h-14">
      <Navigation />
    </div>

    <router-view class="relative h-full"></router-view>

    <div class="flex items-center justify-center py-4 h-6">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue';

export default defineComponent({
  name: 'App',
  components: { Footer, Navigation },
});
</script>
