<template>
  <div class="h-screen w-screen overflow-hidden grid md:grid-rows-[auto_1fr_auto] border border-gray-500">
    <!-- Top navigation -->
    <div class="flex items-center justify-center border-b border-gray-500 py-4">
      Nav
    </div>

    <!-- Main content area -->
    <div class="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] grid-rows-1 h-full overflow-auto">
      <!-- Left column (hidden on mobile) -->
      <div class="hidden md:flex items-center justify-center border-r border-gray-500 md:px-6">
        Left
      </div>

      <!-- Central grid -->
      <div class="grid grid-cols-1 md:grid-rows-[1fr_2fr] h-full">
        <div class="border border-gray-500 flex items-center justify-center overflow-hidden">
          Top row
        </div>
        <div class="grid md:grid-cols-2 md:grid-rows-2 overflow-hidden">
          <div class="border border-gray-500 overflow-y-auto">
            <Weather />
          </div>
          <div class="border border-gray-500 flex items-center justify-start overflow-y-auto ">
            <TodoList />
          </div>
          <div class="border border-gray-500 flex items-center justify-start overflow-y-auto">
            <Calendar />
          </div>
          <div class="border border-gray-500 flex items-center justify-start overflow-y-auto">
            <NewsFeed />
          </div>
        </div>
      </div>

      <!-- Right column (hidden on mobile) -->
      <div class="hidden md:flex items-center justify-center border-l border-gray-500 md:px-28">
        Right
      </div>
    </div>

    <!-- Bottom navigation -->
    <div class="flex items-center justify-center border-t border-gray-500 py-4">
      Bottom
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Weather from './components/Weather.vue';
import TodoList from './components/TodoList.vue';
import Calendar from './components/Calendar.vue';
import NewsFeed from './components/NewsFeed.vue';

export default defineComponent({
  name: 'App',
  components: {
    Weather,
    TodoList,
    Calendar,
    NewsFeed,
  },
});
</script>
