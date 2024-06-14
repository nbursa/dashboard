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
      <div class="flex gap-2 overflow-y-auto p-1">
        <WeatherWidget />
        <QuoteWidget />
      </div>
      <div class="flex gap-2 p-1">
        <ClockWidget />
        <TodoWidget />
      </div>
      <div class="flex gap-2 p-1">
        <CalendarWidget class="w-full" />
        <FitnessTrackerWidget class="w-full" />
      </div>
      <div class="flex gap-2 p-1">
        <StockMarketWidget class="w-full" />
        <FinanceWidget class="w-full" />
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
import ClockWidget from '../components/ClockWidget.vue'
import QuoteWidget from '../components/QuoteWidget.vue'
import StockMarketWidget from '../components/StockMarketWidget.vue'
import FinanceWidget from '../components/FinanceWidget.vue'
import FitnessTrackerWidget from '../components/FitnessTrackerWidget.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    FitnessTrackerWidget,
    FinanceWidget,
    StockMarketWidget,
    QuoteWidget,
    ClockWidget,
    LeftSidebar,
    RightSidebar,
    Carousel,
    WeatherWidget,
    TodoWidget,
    CalendarWidget,
  },
});
</script>
