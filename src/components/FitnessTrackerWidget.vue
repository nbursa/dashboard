<template>
  <div class="flex flex-col items-center justify-between p-4 bg-light-bg/20 rounded-lg shadow-lg">
    <h2 class="text-lg font-semibold mb-4 mr-auto">Fitness Tracker</h2>
    <div class="w-full flex flex-col justify-between gap-2">
      <div class="flex items-center justify-between">
        <h3 class="text-md font-medium">Steps Taken</h3>
        <span>{{ stepsToday }}</span>
      </div>
      <div class="flex items-center justify-between">
        <h3 class="text-md font-medium">Calories Burned</h3>
        <span>{{ caloriesToday }}</span>
      </div>
      <div class="flex items-center justify-between">
        <h3 class="text-md font-medium">Active Minutes</h3>
        <span>{{ activeMinutesToday }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'FitnessTrackerWidget',
  setup() {
    const stepsToday = ref(7000);
    const caloriesToday = ref(500);
    const activeMinutesToday = ref(45);

    onMounted(() => {
      // Fetch fitness data from an API or a device
    });

    return {
      stepsToday,
      caloriesToday,
      activeMinutesToday,
    };
  },
});
</script>
