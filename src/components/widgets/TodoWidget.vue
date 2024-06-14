<template>
  <div class="flex flex-col items-center justify-start w-full rounded-lg shadow-lg bg-white/10 overflow-hidden">
    <RouterLink to="/tasks" class="overflow-y-auto w-full">
      <h3 class="text-xl font-semibold text-left w-full px-2 py-4 overflow-y-auto">To-Do List</h3>
      <div v-if="loading" class="text-center text-gray-500">Loading...</div>
      <div v-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-if="todos" class="w-full">
        <ul>
          <li v-for="(todo, index) in todos" :key="todo._id"
              :class="{'bg-light-bg/10': index % 2 === 0, '': index % 2 !== 0}"
              class="bg-dark-bg hover:bg-light-bg/20 transition-colors">
            <RouterLink :to="`/task/${todo._id}`" class="px-8 py-4 block text-light-bg text-sm capitalize">
              {{ index + 1 }}. {{ todo.title }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </RouterLink>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface Todo {
  _id: string;
  title: string;
}

export default defineComponent({
  name: 'TodoWidget',
  setup() {
    const todos = ref<Todo[]>([]);
    const loading = ref(true);
    const error = ref('');

    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/todos');
        todos.value = response.data;
        console.log(response.data);
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
