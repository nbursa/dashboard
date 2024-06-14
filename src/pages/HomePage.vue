<template>
<div class="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] grid-rows-1 h-full w-full overflow-hidden">
  <div class="hidden md:flex items-center justify-center">
    <LeftSidebar class="sidebar" />
  </div>

  <div class="grid grid-cols-1 md:grid-rows-[1fr_2fr] overflow-y-auto md:overflow-hidden">
    <div class="p-1 grid md:grid-rows-1 overflow-hidden">
      <Carousel />
    </div>
    <div class="grid md:grid-cols-2 md:grid-rows-2">
      <div class="flex flex-col md:flex-row gap-2 p-1">
        <WeatherWidget />
        <QuoteWidget />
      </div>
      <div class="flex flex-col sm:flex-row gap-2 p-1">
        <ClockWidget />
        <TodoWidget />
      </div>
      <div class="flex flex-col sm:flex-row gap-2 p-1">
        <CalendarWidget class="w-full" />
        <FitnessTrackerWidget class="w-full" />
      </div>
      <div class="flex flex-col md:flex-row gap-2 p-1">
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
import WeatherWidget from '../components/widgets/WeatherWidget.vue';
import TodoWidget from '../components/widgets/TodoWidget.vue';
import CalendarWidget from '../components/widgets/CalendarWidget.vue';
import Carousel from '../components/Carousel.vue';
import LeftSidebar from '../components/LeftSidebar.vue';
import RightSidebar from '../components/RightSidebar.vue';
import ClockWidget from '../components/widgets/ClockWidget.vue'
import QuoteWidget from '../components/widgets/QuoteWidget.vue'
import StockMarketWidget from '../components/widgets/StockMarketWidget.vue'
import FinanceWidget from '../components/widgets/FinanceWidget.vue'
import FitnessTrackerWidget from '../components/widgets/FitnessTrackerWidget.vue'

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
