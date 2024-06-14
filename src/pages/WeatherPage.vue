<template>
  <div class="flex flex-col items-center justify-center w-full h-full p-4">
    <div class="backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-3xl font-semibold">{{ weather?.name }}</h2>
        <button @click="refreshWeather" class="">
          Refresh
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
        <div class="text-lg text-center mb-2">Condition: {{ weather?.weather[0]?.description }}</div>
        <div class="text-lg text-center mb-2">Temperature: {{ weather?.main?.temp }} °C</div>
        <div class="text-lg text-center mb-2">Feels Like: {{ weather?.main?.feels_like }} °C</div>
        <div class="text-lg text-center mb-2">Humidity: {{ weather?.main?.humidity }}%</div>
        <div class="text-lg text-center mb-2">Pressure: {{ weather?.main?.pressure }} hPa</div>
        <div class="text-lg text-center mb-2">Wind Speed: {{ weather?.wind?.speed }} m/s</div>
        <div class="text-lg text-center mb-2">Wind Direction: {{ weather?.wind?.deg }}°</div>
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
  main: { temp: number; feels_like: number; humidity: number; pressure: number };
  wind: { speed: number; deg: number };
}

export default defineComponent({
  name: 'WeatherDetailPage',
  setup() {
    const weather = ref<Weather | null>(null);
    const loading = ref(true);
    const error = ref('');

    const fetchWeather = async () => {
      loading.value = true;
      error.value = '';
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

    const refreshWeather = () => {
      fetchWeather();
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
      refreshWeather,
    };
  },
});
</script>
