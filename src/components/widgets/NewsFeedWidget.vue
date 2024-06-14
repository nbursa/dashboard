<template>
  <div class="w-full h-full p-4">
    <h2 class="text-xl font-bold mb-4">News Feed</h2>
    <div class="h-full pb-12 overflow-y-auto">
      <RouterLink v-for="(newsItem, index) in newsList" :key="index" :to="`/news/${index}`" class="flex flex-col items-start justify-center w-full p-4 mb-4 bg-light-bg/10 hover:bg-light-bg/20 rounded shadow-lg">
        <h3 class="font-semibold">{{ newsItem.title }}</h3>
        <p class="text-sm font-light">{{ newsItem.description }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

interface NewsItem {
  title: string;
  description: string;
}

export default defineComponent({
  name: 'NewsFeedWidget',
  setup() {
    const newsList = ref<NewsItem[]>([]);

    const mockNews = () => {
      const mockData = [];
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          title: `News Title ${i}`,
          description: `Are Certificates From Code-Learning Websites Worth Anything? Description for news item ${i}.`
        });
      }
      newsList.value = mockData;
    };

    onMounted(() => {
      mockNews();
    });

    return {
      newsList,
    };
  },
});
</script>
