<template>
  <div class="flex items-center justify-center w-full h-full">
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <h3>{{ weather?.name }}</h3>
        <p>{{ weather?.weather[0]?.description }}</p>
        <p>{{ weather?.main?.temp }} °C</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios';

interface Weather {
  name: string;
  weather: { description: string }[];
  main: { temp: number };
}

export default defineComponent({
  name: 'Weather',
  setup() {
    const weather = ref<Weather | null>(null);
    const loading = ref(true);
    const error = ref('');

    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string;
        const city = 'Belgrade';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        const response = await axios.get(url);
        weather.value = response.data;
        localStorage.setItem('weatherData', JSON.stringify(response.data));
      } catch (err) {
        error.value = 'Failed to fetch weather data';
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      const storedWeather = localStorage.getItem('weatherData');
      if (storedWeather) {
        weather.value = JSON.parse(storedWeather);
        loading.value = false;
      } else {
        fetchWeather();
      }
    });

    return {
      weather,
      loading,
      error,
    };
  },
});
</script>
