<template>
  <div class="p-4 flex flex-col items-center justify-between bg-light-bg/20 rounded-lg shadow-lg min-w-72">
    <h2 class="text-xl font-semibold mb-4 mr-auto">Current Time</h2>
    <div class="text-5xl font-extrabold">{{ currentTime }}</div>
    <div class=" ml-auto font-bold">{{ currentDate }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ClockWidget',
  setup() {
    const currentTime = ref('');
    const currentDate = ref('');

    const updateTime = () => {
      const now = new Date();
      currentTime.value = now.toLocaleTimeString();
      currentDate.value = now.toLocaleDateString().replace(/\//g, '.');
    };

    onMounted(() => {
      updateTime();
      setInterval(updateTime, 1000);
    });

    return {
      currentTime,
      currentDate,
    };
  },
});
</script>
