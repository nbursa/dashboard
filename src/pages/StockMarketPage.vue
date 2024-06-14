<template>
  <div class="flex flex-col items-center justify-center w-full h-full p-4">
    <div class="backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-3xl font-semibold">Stock Market Tracker</h2>
        <button @click="addStockRecord" class="">
          Add Stock
        </button>
      </div>
      <div v-if="loading" class="flex justify-center items-center h-full">
        <svg class="animate-spin h-10 w-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
      </div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else>
        <ul>
          <li v-for="stock in stockRecords" :key="stock.id" class="mb-4 p-4 bg-light-bg/20 rounded-lg shadow-lg">
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-xl font-semibold">{{ stock.symbol }}</h3>
                <p class="text-gray-400">Price: ${{ stock.price }}</p>
                <p class="text-gray-400">Change: ${{ stock.change }} ({{ stock.changePercent }}%)</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

interface StockRecord {
  id: number;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export default defineComponent({
  name: 'StockMarketPage',
  setup() {
    const stockRecords = ref<StockRecord[]>([]);
    const loading = ref(true);
    const error = ref('');

    const fetchStockRecords = async () => {
      loading.value = true;
      error.value = '';
      try {
        stockRecords.value = [
          { id: 1, symbol: 'AAPL', price: 150, change: 2, changePercent: 1.35 },
          { id: 2, symbol: 'GOOGL', price: 2800, change: -15, changePercent: -0.53 },
          { id: 3, symbol: 'AMZN', price: 3400, change: 10, changePercent: 0.29 },
        ];
      } catch (err) {
        error.value = 'Failed to fetch stock records';
      } finally {
        loading.value = false;
      }
    };

    const addStockRecord = () => {
      // Logic to add a stock record
      alert('Add Stock functionality');
    };

    onMounted(() => {
      fetchStockRecords();
    });

    return {
      stockRecords,
      loading,
      error,
      addStockRecord,
    };
  },
});
</script>
