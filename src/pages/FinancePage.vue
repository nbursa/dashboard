<template>
  <div class="flex flex-col items-center justify-center w-full h-full p-4">
    <div class="backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-3xl font-semibold">Finance Tracker</h2>
        <button @click="addFinanceRecord" class="">
          Add Record
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
          <li v-for="record in financeRecords" :key="record.id" class="mb-4 p-4 bg-light-bg/20 rounded-lg shadow-lg">
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-xl font-semibold">{{ record.date }}</h3>
                <p class="text-gray-400">Income: {{ record.income }}</p>
                <p class="text-gray-400">Expenses: {{ record.expenses }}</p>
                <p class="text-gray-400">Balance: {{ record.balance }}</p>
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

interface FinanceRecord {
  id: number;
  date: string;
  income: number;
  expenses: number;
  balance: number;
}

export default defineComponent({
  name: 'FinancePage',
  setup() {
    const financeRecords = ref<FinanceRecord[]>([]);
    const loading = ref(true);
    const error = ref('');

    const fetchFinanceRecords = async () => {
      loading.value = true;
      error.value = '';
      try {
        financeRecords.value = [
          { id: 1, date: '2024-06-14', income: 5000, expenses: 2000, balance: 3000 },
          { id: 2, date: '2024-06-15', income: 5500, expenses: 2500, balance: 3000 },
          { id: 3, date: '2024-06-16', income: 6000, expenses: 3000, balance: 3000 },
        ];
      } catch (err) {
        error.value = 'Failed to fetch finance records';
      } finally {
        loading.value = false;
      }
    };

    const addFinanceRecord = () => {
      // Logic to add a finance record
      alert('Add Finance Record functionality');
    };

    onMounted(() => {
      fetchFinanceRecords();
    });

    return {
      financeRecords,
      loading,
      error,
      addFinanceRecord,
    };
  },
});
</script>
