<template>
<div class="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] grid-rows-1 h-full w-full overflow-hidden">
  <div class="hidden md:flex items-center justify-center">
    <LeftSidebar class="sidebar" />
  </div>

  <div class="grid grid-cols-1 md:grid-rows-[1fr_2fr]">
    <div class="p-1 grid md:grid-rows-1 overflow-hidden">
      <Carousel />
    </div>
    <div class="grid md:grid-cols-2 md:grid-rows-2">
      <div class="overflow-y-auto p-1">
        <WeatherWidget />
      </div>
      <div class="flex overflow-y-auto p-1">
        <TodoWidget />
      </div>
      <div class="p-1">
        <CalendarWidget class="w-full h-full" />
      </div>
      <div class="p-1">
        <!-- <NewsFeedWidget /> -->
      </div>
    </div>
  </div>

  <div class="hidden md:flex items-center justify-center">
    <RightSidebar class="sidebar" />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WeatherWidget from '../components/WeatherWidget.vue';
import TodoWidget from '../components/TodoWidget.vue';
import CalendarWidget from '../components/CalendarWidget.vue';
import Carousel from '../components/Carousel.vue';
import LeftSidebar from '../components/LeftSidebar.vue';
import RightSidebar from '../components/RightSidebar.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    LeftSidebar,
    RightSidebar,
    Carousel,
    WeatherWidget,
    TodoWidget,
    CalendarWidget,
  },
});
</script>
