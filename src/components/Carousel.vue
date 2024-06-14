<template>
  <div class="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
    <div
      class="flex transition-transform duration-500 ease-in-out h-full w-full"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="flex overflow-hidden flex-shrink-0 w-full h-full px-1 pb-1 transition duration-200">
        <img :src="image" alt="Carousel Image" class="object-cover w-full h-full rounded-lg" />
      </div>
    </div>
    <button @click="prev" class="absolute top-1/2 left-2 transform -translate-y-1/2">‹</button>
    <button @click="next" class="absolute top-1/2 right-2 transform -translate-y-1/2">›</button>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Carousel',
  setup() {
    const images = ref([
      '/images/image1.webp',
      '/images/image2.webp',
      '/images/image3.webp',
      '/images/image4.webp',
      '/images/image5.webp',
    ]);
    const currentIndex = ref(0);

    const next = () => {
      if (currentIndex.value < images.value.length - 1) {
        currentIndex.value++;
      } else {
        currentIndex.value = 0;
      }
    };

    const prev = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      } else {
        currentIndex.value = images.value.length - 1;
      }
    };

    return {
      images,
      currentIndex,
      next,
      prev,
    };
  },
});
</script>
