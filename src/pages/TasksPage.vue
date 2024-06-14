<template>
  <div class="flex flex-col items-center justify-center w-full h-full p-4">
    <div class="backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-3xl font-semibold">Tasks</h2>
        <button @click="addTask" class="">
          Add Task
        </button>
      </div>
      <div v-if="loading" class="flex justify-center items-center h-full">
        <svg class="animate-spin h-10 w-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
      </div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else>
        <ul>
          <li v-for="task in tasks" :key="task.id" class="mb-4 p-4 bg-light-bg/20 rounded-lg shadow-lg">
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-xl font-semibold">{{ task.title }}</h3>
                <p class="text-gray-400">{{ task.description }}</p>
              </div>
              <div class="text-right">
                <p class="text-gray-400">{{ task.date }}</p>
                <p :class="{'text-green-500': task.status === 'Completed', 'text-yellow-500': task.status === 'In Progress', 'text-red-500': task.status === 'Pending'}">{{ task.status }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

interface Task {
  id: number;
  title: string;
  description: string;
  date: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}

export default defineComponent({
  name: 'TasksPage',
  setup() {
    const tasks = ref<Task[]>([]);
    const loading = ref(true);
    const error = ref('');

    const fetchTasks = async () => {
      loading.value = true;
      error.value = '';
      try {
        tasks.value = [
          { id: 1, title: 'Task 1', description: 'Description of Task 1', date: '2024-06-14', status: 'Pending' },
          { id: 2, title: 'Task 2', description: 'Description of Task 2', date: '2024-06-15', status: 'In Progress' },
          { id: 3, title: 'Task 3', description: 'Description of Task 3', date: '2024-06-16', status: 'Completed' },
        ];
      } catch (err) {
        error.value = 'Failed to fetch tasks';
      } finally {
        loading.value = false;
      }
    };

    const addTask = () => {
      // Logic to add a task
      alert('Add Task functionality');
    };

    onMounted(() => {
      fetchTasks();
    });

    return {
      tasks,
      loading,
      error,
      addTask,
    };
  },
});
</script>
