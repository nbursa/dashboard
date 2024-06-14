<template>
  <div class="flex flex-col items-center justify-center w-full h-full p-4">
    <div class="flex flex-col items-center justify-center w-full max-w-4xl">
      <div class="flex items-center justify-between w-full mb-4">
        <button @click="prevMonth" class="">
          &lt;
        </button>
        <span class="text-lg md:text-2xl font-semibold">{{ monthYear }}</span>
        <button @click="nextMonth" class="">
          &gt;
        </button>
      </div>
      <div class="grid grid-cols-7 gap-2 w-full text-xs md:text-base">
        <div class="text-center font-semibold p-2" v-for="day in daysOfWeek" :key="day">{{ day }}</div>
        <div v-for="blank in blankDays" :key="'blank-' + blank" class="p-2"></div>
        <div
          v-for="(day, index) in daysInMonth"
          :key="index"
          class="flex items-center justify-center p-2 cursor-pointer hover:bg-gray-200 hover:text-gray-800 rounded-full transition duration-200 ease-in-out"
          :class="{ 'bg-yellow-300 text-gray-800': isToday(day), 'bg-gray-100': selectedDay === day }"
          @click="selectDay(day)"
        >
          {{ day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'CalendarPage',
  setup() {
    const now = new Date();
    const currentMonth = ref(now.getMonth());
    const currentYear = ref(now.getFullYear());
    const selectedDay = ref<number | null>(null);

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const daysInMonth = computed(() => {
      const days = [];
      const daysInCurrentMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
      for (let day = 1; day <= daysInCurrentMonth; day++) {
        days.push(day);
      }
      return days;
    });

    const firstDayOfMonth = computed(() => {
      return new Date(currentYear.value, currentMonth.value, 1).getDay();
    });

    const blankDays = computed(() => {
      const blanks = [];
      for (let i = 0; i < firstDayOfMonth.value; i++) {
        blanks.push(i);
      }
      return blanks;
    });

    const monthYear = computed(() => {
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return `${monthNames[currentMonth.value]} ${currentYear.value}`;
    });

    const prevMonth = () => {
      if (currentMonth.value === 0) {
        currentMonth.value = 11;
        currentYear.value--;
      } else {
        currentMonth.value--;
      }
    };

    const nextMonth = () => {
      if (currentMonth.value === 11) {
        currentMonth.value = 0;
        currentYear.value++;
      } else {
        currentMonth.value++;
      }
    };

    const isToday = (day: number) => {
      const today = new Date();
      return (
        day === today.getDate() &&
        currentMonth.value === today.getMonth() &&
        currentYear.value === today.getFullYear()
      );
    };

    const selectDay = (day: number) => {
      selectedDay.value = day;
      console.log(`Day selected: ${day}`);
    };

    return {
      daysOfWeek,
      daysInMonth,
      blankDays,
      monthYear,
      prevMonth,
      nextMonth,
      isToday,
      selectDay,
      selectedDay,
    };
  },
});
</script>
