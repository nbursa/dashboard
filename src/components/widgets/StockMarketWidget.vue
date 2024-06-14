<template>
  <div class="flex flex-col items-center justify-between p-4 bg-light-bg/20 rounded-lg shadow-lg">
    <h2 class="text-xl font-semibold mr-auto">Stock Market</h2>
    <div class="flex flex-col justify-between">
      <div v-for="stock in stocks" :key="stock.symbol" class="w-full flex justify-between gap-2 md:gap-6 mb-2">
        <div>{{ stock.symbol }}</div>
        <div :class="stock.change > 0 ? 'text-green-500' : 'text-red-500'">
          {{ stock.price }} ({{ stock.change > 0 ? '+' : '' }}{{ stock.change }}%)
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'StockMarketWidget',
  setup() {
    const stocks = ref([
      { symbol: 'AAPL', price: 150, change: 1.2 },
      { symbol: 'GOOGL', price: 2800, change: -0.5 },
      { symbol: 'AMZN', price: 3500, change: 2.3 },
    ]);

    onMounted(() => {
      // Fetch stock data from an API
    });

    return {
      stocks,
    };
  },
});
</script>
