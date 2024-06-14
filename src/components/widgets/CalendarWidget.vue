<template>
  <RouterLink to="/calendar" class="w-full h-full">
    <div class="flex flex-col items-center justify-start w-full h-full p-2 md:p-4 bg-white/20 rounded-lg shadow-lg" @click.stop="">
      <div class="flex items-center justify-between w-full mb-2">
        <button @click.stop="prevMonth" class="text-xs lg:text-sm font-bold">&lt;</button>
        <span class="text-base md:text-lg font-semibold">{{ monthYear }}</span>
        <button @click.stop="nextMonth" class="text-xs lg:text-sm font-bold">&gt;</button>
      </div>
      <div class="grid grid-cols-7 gap-0 lg:gap-1 w-full text-xs md:text-sm">
        <div class="text-center font-semibold p-0 lg:px-1" v-for="day in daysOfWeek" :key="day">{{ day }}</div>
        <div v-for="blank in blankDays" :key="'blank-' + blank" class="p-0.5 md:p-1"></div>
        <div
          v-for="(day, index) in daysInMonth"
          :key="index"
          class="flex items-center justify-center py-0 lg:px-1 cursor-pointer hover:bg-gray-200 hover:text-gray-800 rounded-full"
          :class="{ 'bg-yellow-300 text-gray-800': isToday(day) }"
          @click.stop="selectDay(day)"
        >
          {{ day }}
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'CalendarWidget',
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
    };
  },
});
</script>
