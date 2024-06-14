<template>
  <div class="flex flex-col items-center justify-center w-full h-full p-4">
    <div class="backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-3xl font-semibold">Fitness Tracker</h2>
        <button @click="addFitnessRecord" class="">
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
          <li v-for="record in fitnessRecords" :key="record.id" class="mb-4 p-4 bg-light-bg/20 rounded-lg shadow-lg">
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-xl font-semibold">{{ record.date }}</h3>
                <p class="text-gray-400">Steps: {{ record.steps }}</p>
                <p class="text-gray-400">Calories: {{ record.calories }}</p>
                <p class="text-gray-400">Active Minutes: {{ record.activeMinutes }}</p>
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

interface FitnessRecord {
  id: number;
  date: string;
  steps: number;
  calories: number;
  activeMinutes: number;
}

export default defineComponent({
  name: 'FitnessPage',
  setup() {
    const fitnessRecords = ref<FitnessRecord[]>([]);
    const loading = ref(true);
    const error = ref('');

    const fetchFitnessRecords = async () => {
      loading.value = true;
      error.value = '';
      try {
        fitnessRecords.value = [
          { id: 1, date: '2024-06-14', steps: 7000, calories: 500, activeMinutes: 45 },
          { id: 2, date: '2024-06-15', steps: 8000, calories: 600, activeMinutes: 60 },
          { id: 3, date: '2024-06-16', steps: 7500, calories: 550, activeMinutes: 50 },
        ];
      } catch (err) {
        error.value = 'Failed to fetch fitness records';
      } finally {
        loading.value = false;
      }
    };

    const addFitnessRecord = () => {
      // Logic to add a fitness record
      alert('Add Fitness Record functionality');
    };

    onMounted(() => {
      fetchFitnessRecords();
    });

    return {
      fitnessRecords,
      loading,
      error,
      addFitnessRecord,
    };
  },
});
</script>
