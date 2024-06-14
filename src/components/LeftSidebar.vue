<template>
  <div @mouseenter="expandSidebar" @mouseleave="collapseSidebar" class="h-full flex flex-col p-2 text-white transition-all duration-300" :class="expanded ? 'w-48' : 'w-14'">
    <div class="flex flex-col justify-start flex-0 gap-2 w-full h-full">
      <div v-for="item in menuItems" :key="item.text" class="group flex w-full h-fit">
        <RouterLink :to="`/${item.text.toLowerCase().replace(' ', '-')}`" class="w-full flex items-center justify-start p-2 whitespace-nowrap hover:scale-110 transition duration-200">
          <FontAwesomeIcon :icon="['fas', item.icon]" class="w-6 h-6" />
          <span class="transition-opacity duration-300" :class="expanded ? 'visible ml-4' : 'hidden'">{{ item.text }}</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faCloudSun,
  faTasks,
  faCalendarAlt,
  faDumbbell,
  faPiggyBank,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  name: 'LeftSidebar',
  components: { FontAwesomeIcon },
  setup() {
    const expanded = ref(false);
    const menuItems = ref([
      { icon: faHome.iconName, text: 'Home', path: '/' },
      { icon: faCloudSun.iconName, text: 'Weather', path: '/weather' },
      { icon: faTasks.iconName, text: 'Tasks', path: '/tasks' },
      { icon: faCalendarAlt.iconName, text: 'Calendar', path: '/calendar' },
      { icon: faDumbbell.iconName, text: 'Fitness', path: '/fitness' },
      { icon: faPiggyBank.iconName, text: 'Finance', path: '/finance' },
      { icon: faChartLine.iconName, text: 'Stocks', path: '/stocks' },
    ]);

    const expandSidebar = () => {
      expanded.value = true;
    };

    const collapseSidebar = () => {
      expanded.value = false;
    };

    return {
      menuItems,
      expanded,
      expandSidebar,
      collapseSidebar,
    };
  },
});
</script>
