<template>
  <div class="flex flex-col items-center justify-between p-4 bg-light-bg/20 rounded-lg shadow-lg">
    <h2 class="text-xl font-semibold mb-4 mr-auto">Quote of the Day</h2>
    <div class="text-lg italic">{{ quote }}</div>
    <div class="text-sm mt-2 ml-auto text-right">- {{ author }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'QuoteWidget',
  setup() {
    const quote = ref('');
    const author = ref('');

    const fetchQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      quote.value = data.content;
      author.value = data.author;
    };

    onMounted(() => {
      fetchQuote();
    });

    return {
      quote,
      author,
    };
  },
});
</script>
