<template>
      <div class="flex items-center justify-center w-full h-full shadow-lg">
        <RouterLink to="/weather" class="bg-white/10 backdrop-filter backdrop-blur-lg rounded-lg w-full h-full flex flex-col items-center justify-center flex-1 p-4">
            <div class="">
              <div v-if="loading" class="text-center text-gray-500">Loading...</div>
              <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
              <div v-else>
                <h3 class="text-2xl font-semibold text-center">{{ weather?.name }}</h3>
                <p class="text-lg text-center">{{ weather?.weather[0]?.description }}</p>
                <p class="text-lg text-center">{{ weather?.main?.temp }} °C</p>
              </div>
            </div>
        </RouterLink>
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
  name: 'WeatherWidget',
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
