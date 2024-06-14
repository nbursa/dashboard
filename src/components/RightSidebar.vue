<template>
  <div @mouseenter="expandSidebar" @mouseleave="collapseSidebar" class="h-full flex flex-col p-2 text-white transition-all duration-300" :class="expanded ? 'w-96' : 'w-14'">
    <div class="flex flex-col justify-start flex-0 gap-2 w-full h-full">
      <FontAwesomeIcon :icon="['fas', icon]" class="w-6 h-6 px-2" />
      <NewsFeedWidget v-if="expanded" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import NewsFeedWidget from './NewsFeedWidget.vue'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
  name: 'RightSidebar',
  components: { FontAwesomeIcon, NewsFeedWidget,faNewspaper },
  setup() {
    const expanded = ref(false);
    const icon = faNewspaper.iconName;

    const expandSidebar = () => {
      expanded.value = true;
    };

    const collapseSidebar = () => {
      expanded.value = false;
    };

    return {
      expanded,
      expandSidebar,
      collapseSidebar,
      icon
    };
  },
});
</script>
