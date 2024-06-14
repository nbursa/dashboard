<template>
  <div class="flex flex-col items-center justify-between p-4 bg-white/20 rounded-lg shadow-lg">
    <h2 class="text-lg font-semibold mb-4 mr-auto">Finance Tracker</h2>
    <div class="mb-4 text-lg">
      <div class="flex justify-between">
        <span>Total Income:</span>
        <span>{{ totalIncome }}</span>
      </div>
      <div class="flex justify-between">
        <span>Total Expenses:</span>
        <span>{{ totalExpenses }}</span>
      </div>
    </div>
    <div class="mt-4 flex justify-between font-bold ml-auto">
      <span>Remaining Budget:</span>
      <span>{{ remainingBudget }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'FinanceWidget',
  setup() {
    const totalIncome = ref(5000);
    const expenses = ref([
      { id: 1, name: 'Rent', amount: 1200 },
      { id: 2, name: 'Groceries', amount: 300 },
      { id: 3, name: 'Utilities', amount: 150 },
      { id: 4, name: 'Entertainment', amount: 200 },
    ]);

    const totalExpenses = computed(() => {
      return expenses.value.reduce((acc, expense) => acc + expense.amount, 0);
    });

    const remainingBudget = computed(() => {
      return totalIncome.value - totalExpenses.value;
    });

    return {
      totalIncome,
      expenses,
      totalExpenses,
      remainingBudget,
    };
  },
});
</script>
