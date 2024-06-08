<template>
    <div class="h-screen w-screen overflow-hidden grid grid-rows-[auto_1fr_auto] border border-gray-500">
        <!-- Navigation at the top -->
        <div class="flex items-center justify-center border-b border-gray-500 py-4">
            Top
        </div>

        <!-- Main content area with three columns -->
        <div class="grid grid-cols-1 overflow-y-auto md:overflow-hidden md:grid-cols-[auto_1fr_auto] overflow-auto">
            <!-- New narrow column on the left -->
            <div class="flex items-center justify-center border-r border-gray-500 md:px-6">
                Left
            </div>

            <!-- Main 2x2 grid content area -->
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="md:col-span-2 border border-gray-500 flex items-center justify-center">
                    Top row
                </div>
                <div class="border border-gray-500 flex items-center justify-center">
                    <Weather />
                </div>
                <div class="border border-gray-500 flex items-center justify-center">
                    <TodoList />
                </div>
                <div class="border border-gray-500 flex items-center justify-center">
                    <Calendar />
                </div>
                <div class="border border-gray-500 flex items-center justify-center">
                    <NewsFeed />
                </div>
            </div>

            <!-- Right column content area -->
            <div class="flex items-center justify-center border-l border-gray-500 md:px-28">
                Right
            </div>
        </div>

        <!-- New row at the bottom spanning full width -->
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
