<template>
  <div class="flex flex-col items-center justify-start box-border w-full h-full">
      <h3 class="text-xl font-semibold text-left w-full px-8 py-4">To-Do List</h3>
      <div v-if="loading" class="text-center text-gray-500">Loading...</div>
      <div v-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-if="todos">
        <ul>
          <li v-for="(todo, index) in todos" :key="todo.id"
              :class="{'bg-light-bg/10': index % 2 === 0, '': index % 2 !== 0}"
              class="bg-dark-bg hover:bg-gray-300 transition-colors">
            <a :href="`/todo/${todo.id}`" class="px-8 py-4 block text-light-bg text-sm capitalize">
              {{ index + 1 }}. {{ todo.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface Todo {
  id: number;
  title: string;
}

export default defineComponent({
  name: 'TodoList',
  setup() {
    const todos = ref<Todo[]>([]);
    const loading = ref(true);
    const error = ref('');

    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
        todos.value = response.data;
      } catch (err) {
        error.value = 'Failed to fetch todos';
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchTodos();
    });

    return {
      todos,
      loading,
      error,
    };
  },
});
</script>